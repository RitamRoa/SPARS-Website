import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-playfair' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
  title: 'SPARS',
  description: 'Organic Intelligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}