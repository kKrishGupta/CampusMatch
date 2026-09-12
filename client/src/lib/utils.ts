export function formatCurrency(amount: number): string {
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)}L / year`;
  }
  return `₹${amount.toLocaleString('en-IN')} / year`;
}

export function formatLpa(lpa: number): string {
  if (!lpa || lpa <= 0) return 'N/A';
  return `₹${lpa % 1 === 0 ? lpa.toFixed(0) : lpa.toFixed(1)} LPA`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

export function getInitials(name: string): string {
  if (!name) return 'CM';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function getCollegeLogoUrl(collegeName: string, logoUrl?: string): string {
  if (logoUrl && logoUrl.startsWith('http') && !logoUrl.includes('photo-1562774053?') && !logoUrl.includes('photo-1562774053')) {
    return logoUrl;
  }
  const cleanName = collegeName.replace(/\(.*\)/, '').trim();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=1E1B4B&color=818CF8&bold=true&font-size=0.36&size=200`;
}

export function getCollegeBannerUrl(collegeId: string, bannerUrl?: string): string {
  if (bannerUrl && bannerUrl.startsWith('http') && !bannerUrl.includes('photo-1541339907198?') && !bannerUrl.includes('photo-1541339907198')) {
    return bannerUrl;
  }
  const fallbackBanners = [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=80',
  ];
  let charSum = 0;
  const str = collegeId || 'college';
  for (let i = 0; i < str.length; i++) {
    charSum += str.charCodeAt(i);
  }
  return fallbackBanners[charSum % fallbackBanners.length];
}

