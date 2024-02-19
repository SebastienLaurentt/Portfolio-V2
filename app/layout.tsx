import Header from "@/src/theme/features/Header/Header";
import { ThemeProvider } from "../src/theme/ThemeProvider";

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
            <Header />
            <div>{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
