import { Footer } from "@/src/features/layout/Footer/Footer";
import { Header } from "../src/features/layout/Header/Header";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import './globals.css';
import ScrollToTopButton from "@/components/Button/DownloadButton/ScrollToTopButton/ScrollToTopButton";
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Sébastien Laurent - Développeur Web',
  description: "Bienvenue sur mon portfolio ! Venez découvrir mon histoire et les derniers projets que j'ai réalisés."
}

const roboto = Roboto({
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={roboto.className}>
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
