import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { capsFont } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={capsFont.variable}>
      <body>
        <Header />   
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
