import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata = {
  title: "Club Net",
  description: "Club information at your finger tip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased content-container min-h-screen space-y-10`}
      >
        <nav className="flex flex-row justify-between items-center py-7">
          <Link href="/" className="text-xl">
            ClubNet
          </Link>
          <div className="flex flex-row space-between space-x-7">
            <Link href={`/clubs`}>Clubs</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/contact`}>Contact</Link>
            <Link href={`/login`}>Login</Link>
          </div>
        </nav>
        {children}
        <footer className="my-auto">
          <p>© 2021 ClubNet</p>
        </footer>
      </body>
    </html>
  );
}
