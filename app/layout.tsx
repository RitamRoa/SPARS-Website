import './globals.css';

export const metadata = {
  title: 'SPARS Website',
  description: 'Business website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}