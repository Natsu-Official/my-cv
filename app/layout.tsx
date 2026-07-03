import "./globals.css";
export const metadata = {
  title: "Бүрэнтөгс | Software Engineer",
  description: "Portfolio & CV of Burentugs",
  openGraph: {
    title: "Burentugs CV",
    description: "Software Engineer Portfolio",
    url: "https://your-domain.vercel.app",
    siteName: "Burentugs CV",
    locale: "mn_MN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}