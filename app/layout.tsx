import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Home - ABN CAPITAL',
    template: '%s - ABN CAPITAL',
  },
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
    <html lang="en" className="scroll-smooth suppressHydrationWarning">
      <body className={inter.className}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:p-4 focus:rounded-md focus:shadow-lg dark:focus:bg-gray-800 dark:focus:text-white"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}