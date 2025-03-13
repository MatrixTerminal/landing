import './globals.css';

export const metadata = {
  title: 'Matrix - The Matrix',
  description: 'Enter The Matrix',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}