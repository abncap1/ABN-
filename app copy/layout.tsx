import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ABN CAPITAL - Premier Portfolio Management',
  description: 'Professional portfolio management services with cutting-edge strategies and personalized investment solutions for sophisticated investors.',
  keywords: 'portfolio management, investment, wealth management, financial advisory, ABN CAPITAL',
  authors: [{ name: 'ABN CAPITAL' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'ABN CAPITAL - Premier Portfolio Management',
    description: 'Professional portfolio management services with cutting-edge strategies and personalized investment solutions.',
    type: 'website',
    url: 'https://abncapital.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}