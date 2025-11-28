"use client";

import { useState, useEffect } from "react";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FloatingButtons from "./Components/FloatingButtons";
import WebLoader from "./Components/WebLoader";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load delay
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased relative">
        {loading ? (
          <WebLoader />
        ) : (
          <>
            <Header />
            <FloatingButtons />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

