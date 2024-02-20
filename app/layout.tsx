import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "../src/features/layout/Header/Header";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import './globals.css';
import ScrollToTopButton from "@/components/Button/DownloadButton/ScrollToTopButton/ScrollToTopButton";

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
