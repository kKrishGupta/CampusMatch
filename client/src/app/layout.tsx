import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/providers/AppProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CompareBar } from '@/components/compare/CompareBar';

export const metadata: Metadata = {
  title: 'CampusMatch — Discover, Compare & Choose Colleges in India',
  description: 'CampusMatch helps students discover colleges, search and filter cutoffs, compare fees and placement packages, and read verified student reviews.',
  keywords: 'colleges in india, college discovery, compare colleges, engineering fees, iit placements, bits pilani fees, college reviews',
  icons: {
    icon: [
      { url: '/image.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/image.png',
    apple: '/image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900" suppressHydrationWarning>
        <AppProvider>
          <Navbar />
          <div className="flex-1 pb-16">{children}</div>
          <CompareBar />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
