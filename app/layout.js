import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import image from "@/public/bg2.jpg"
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
        style={{"backgroundImage": `url(${image.src})` , "backgroundSize": "cover" ,backgroundPosition: 'center' } }
      >
            <main className="flex min-h-screen flex-col items-center justify-center  ">
            {children}
</main>
     
      </body>
    </html>
  );
}


