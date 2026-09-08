import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultCrusorColor = "rgb(255,255,255)";
  return (
    <html lang="en">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
