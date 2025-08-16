import type { Metadata } from 'next';
import './globals.css';
import ClerkThemeProvider from '@/components/ClerkThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'CostPilot AI - Smart Financial Management',
  description:
    'AI-powered expense tracking app with intelligent insights, smart categorization, and personalized financial recommendations',
};

export default function RootLayout({
  children,
}: Readonly<{
children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Always apply dark mode
                  document.documentElement.classList.add('dark');
                  document.body.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased transition-colors duration-300 bg-black text-white" suppressHydrationWarning>
        <ThemeProvider>
          <ClerkThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}