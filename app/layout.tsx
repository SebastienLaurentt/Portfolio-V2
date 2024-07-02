import ScrollToTopButton from "@/components/Button/DownloadButton/ScrollToTopButton/ScrollToTopButton";
import { Footer } from "@/src/features/layout/Footer/Footer";
import { Bebas_Neue } from "next/font/google";
import { Header } from "../src/features/layout/Header/Header";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Sébastien Laurent - Développeur Web",
  description:
    "Bienvenue sur mon portfolio ! Venez découvrir mon histoire et les derniers projets que j'ai réalisés.",
    metadataBase: new URL('https://sebastienlaurent.fr/'),
};

const Bebas = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="fr" suppressHydrationWarning>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body className={Bebas.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className=" flex h-full flex-col overflow-x-hidden">
              <Header />
              <div>{children}</div>
              <Footer />
              <ScrollToTopButton />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
