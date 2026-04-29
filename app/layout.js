import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Calixta | Premium Luxury Salon",
  description: "Experience unparalleled luxury grooming and styling at Calixta, your premier destination for high-end salon services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-luxury-black text-white">
        <Navbar />
        {/* pt-24 offsets the content so it doesn't hide behind the fixed Navbar */}
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}