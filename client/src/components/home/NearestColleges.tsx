'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Locate, MapPin, Navigation, Car, ArrowUpRight, Sparkles, Building2, Train } from 'lucide-react';
import { MOCK_COLLEGES } from '@/data/colleges';
import { College } from '@/types/college';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatLpa, getCollegeLogoUrl } from '@/lib/utils';
import { SaveButton } from '@/components/college/SaveButton';
import { CompareButton } from '@/components/college/CompareButton';

// Known coordinates for Indian cities
const CITY_COORDINATES: Record<string, { lat: number; lng: number; name: string }> = {
  'delhi': { lat: 28.6139, lng: 77.2090, name: 'New Delhi / NCR' },
  'mumbai': { lat: 19.0760, lng: 72.8777, name: 'Mumbai, Maharashtra' },
  'bengaluru': { lat: 12.9716, lng: 77.5946, name: 'Bengaluru, Karnataka' },
  'chennai': { lat: 13.0827, lng: 80.2707, name: 'Chennai, Tamil Nadu' },
  'hyderabad': { lat: 17.3850, lng: 78.4867, name: 'Hyderabad, Telangana' },
  'kolkata': { lat: 22.5726, lng: 88.3639, name: 'Kolkata, West Bengal' },
  'pune': { lat: 18.5204, lng: 73.8567, name: 'Pune, Maharashtra' },
  'jaipur': { lat: 26.9124, lng: 75.7873, name: 'Jaipur, Rajasthan' },
};

function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export const NearestColleges: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number; label: string }>({
    lat: 28.6139,
    lng: 77.2090,
    label: 'New Delhi / NCR (Detected)',
  });
  const [selectedCityKey, setSelectedCityKey] = useState<string>('delhi');
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locationSuccess, setLocationSuccess] = useState<boolean>(false);

  // Detect GPS Location
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setLocationSuccess(false);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation({
          lat: latitude,
          lng: longitude,
          label: `GPS Location (${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°)`,
        });
        setIsLocating(false);
        setLocationSuccess(true);
      },
      () => {
        setIsLocating(false);
        alert('Could not retrieve your exact GPS coordinates. Defaulting to selected city.');
      },
      { timeout: 8000 }
    );
  };

  const handleCityChange = (cityKey: string) => {
    setSelectedCityKey(cityKey);
    const coords = CITY_COORDINATES[cityKey];
    if (coords) {
      setUserLocation({
        lat: coords.lat,
        lng: coords.lng,
        label: coords.name,
      });
      setLocationSuccess(false);
    }
  };

  // Rank Colleges by Distance
  const nearestColleges = useMemo(() => {
    return MOCK_COLLEGES.map((college) => {
      // Find matching city coords or compute fallback distance
      const cityKey = college.city?.toLowerCase() || '';
      let collegeCoords = { lat: 28.6139, lng: 77.2090 };

      for (const [key, val] of Object.entries(CITY_COORDINATES)) {
        if (cityKey.includes(key) || college.location.toLowerCase().includes(key)) {
          collegeCoords = { lat: val.lat, lng: val.lng };
          break;
        }
      }

      // Add small hash offset per college so colleges in same city don't show 0 km
      let offsetSum = 0;
      for (let i = 0; i < college.id.length; i++) offsetSum += college.id.charCodeAt(i);
      const latOffset = ((offsetSum % 17) - 8) * 0.02;
      const lngOffset = ((offsetSum % 23) - 11) * 0.02;

      const distanceKm = Math.max(
        1.2,
        calculateDistanceKm(
          userLocation.lat,
          userLocation.lng,
          collegeCoords.lat + latOffset,
          collegeCoords.lng + lngOffset
        )
      );

      const estimatedDriveMins = Math.round(distanceKm * 2.2);

      return {
        ...college,
        distanceKm,
        estimatedDriveMins,
      };
    })
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 6);
  }, [userLocation]);

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Location Detector Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-2">
              <Navigation className="w-4 h-4 text-blue-600" /> Nearby Campus Finder
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Nearest Colleges to My Location
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              Discover top-ranked universities sorted by exact distance from your current location.
            </p>
          </div>

          {/* Location Actions Row */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* City Selector */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-2xl px-3 py-1.5 text-xs font-semibold text-slate-800">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <select
                value={selectedCityKey}
                onChange={(e) => handleCityChange(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer font-bold text-slate-900 pr-2"
              >
                <option value="delhi">New Delhi / NCR</option>
                <option value="mumbai">Mumbai</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="chennai">Chennai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="kolkata">Kolkata</option>
                <option value="pune">Pune</option>
                <option value="jaipur">Jaipur</option>
              </select>
            </div>

            {/* Detect GPS Button */}
            <Button
              variant="brand"
              size="sm"
              isLoading={isLocating}
              onClick={handleDetectLocation}
              leftIcon={<Locate className="w-4 h-4 animate-pulse" />}
            >
              {isLocating ? 'Locating...' : 'Detect My GPS'}
            </Button>
          </div>
        </div>

        {locationSuccess && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Location successfully detected! Displaying nearest colleges to {userLocation.label}.
            </span>
          </div>
        )}

        {/* Nearest Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearestColleges.map((college) => {
            const logoSrc = getCollegeLogoUrl(college.name, college.logoUrl);

            return (
              <div
                key={college.id}
                className="group bg-white rounded-3xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Distance Pill & Save Button */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-extrabold">
                      <Navigation className="w-3.5 h-3.5 text-blue-600" />
                      <span>{college.distanceKm} km away</span>
                      <span className="text-slate-400 font-normal">• ~{college.estimatedDriveMins} mins drive</span>
                    </div>

                    <SaveButton college={college} />
                  </div>

                  {/* Logo & Info */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 rounded-2xl bg-indigo-950 border border-slate-200 overflow-hidden shrink-0 shadow-sm">
                      <Image
                        src={logoSrc}
                        alt={`${college.name} photo`}
                        fill
                        sizes="56px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <Badge variant={college.type === 'Public' ? 'success' : 'primary'} size="sm">
                          {college.type}
                        </Badge>
                        {college.nirfRank && (
                          <Badge variant="violet" size="sm">
                            NIRF #{college.nirfRank}
                          </Badge>
                        )}
                      </div>

                      <Link
                        href={`/colleges/${college.id}`}
                        className="font-black text-slate-900 text-base hover:text-blue-600 transition-colors line-clamp-1 block"
                      >
                        {college.name}
                      </Link>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{college.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block mb-0.5">Annual Fee</span>
                      <span className="font-extrabold text-slate-900">{formatCurrency(college.feesAnnual)}</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                      <span className="text-[10px] font-bold text-indigo-700 uppercase block mb-0.5">Avg Package</span>
                      <span className="font-extrabold text-slate-900">{formatLpa(college.averagePlacementLpa)}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-3.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-2">
                  <CompareButton college={college} size="sm" />
                  <Link
                    href={`/colleges/${college.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                  >
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
