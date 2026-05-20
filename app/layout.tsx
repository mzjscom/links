import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';

const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'خدمات سريعة',
  description: 'اشحن خطك وتصفح آخر العروض بأمان وسرعة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir='rtl' className="bg-slate-100">
      <body className={ibmPlexArabic.className}>{children}</body>
    </html>
  );
}
