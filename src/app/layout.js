import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS | %s | Rcoder-singh",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS by Rcoder-singh",
  },
  description:
    "A unique creative portfolio designed by Rcoder-singh with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
      </body>
    </html>
  );
}
