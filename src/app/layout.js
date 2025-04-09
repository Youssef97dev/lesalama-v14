import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Le Salama",
  description: "Le Salama Marrakech Rooftop & Sky Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
