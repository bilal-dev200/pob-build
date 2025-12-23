import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";
import { Inter, Poppins, Amaranth, Antonio } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const amaranth = Amaranth({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amaranth",
  display: "swap",
});

const antonio = Antonio({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased relative ${inter.variable} ${poppins.variable} ${amaranth.variable} ${antonio.variable} font-inter`}>
        <Header />
        <FloatingButtons />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

