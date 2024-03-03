import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "../src/features/layout/Header/Header";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import './globals.css';
import ScrollToTopButton from "@/components/Button/DownloadButton/ScrollToTopButton/ScrollToTopButton";

export const metadata = {
  title: 'Sébastien Laurent',
  description: 'Bienvenue sur mon portfolio, je suis développeur web et mobile. Je suis passionné par le développement et la création de sites web et d\'applications mobiles. Je suis également passionné par le développement de jeux vidéo. Je suis actuellement en recherche d\'emploi. N\'hésitez pas à me contacter pour plus d\'informations.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className=" flex flex-col h-full">
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
