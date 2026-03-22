export const metadata = {
  title: 'ספירה לאחור לחתונה',
  description: 'ספירה לאחור לחתונה של שמואל ומירי',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
