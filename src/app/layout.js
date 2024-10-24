import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navBar.js";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Update the metadata object correctly
export const metadata = {
  title: "Blissful Pages - Wedding Website Maker",
  description: "A platform to create better, more custom, and inclusive wedding websites.",
  // Correctly set the favicon here
  icons: {
    icon: "/favicon.png", // Ensure this path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" /> {/* Optional: can keep this for clarity */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
