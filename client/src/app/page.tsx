import { Hero } from '@/components/home/Hero';
import { NearestColleges } from '@/components/home/NearestColleges';
import { PopularColleges } from '@/components/home/PopularColleges';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FeatureSection } from '@/components/home/FeatureSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <NearestColleges />
      <PopularColleges />
      <HowItWorks />
      <FeatureSection />
      <CTASection />
    </div>
  );
}
