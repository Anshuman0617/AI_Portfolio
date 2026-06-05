import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ChatWidget from "../components/ChatWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Anshuman Singh | BITS Pilani Portfolio",
  description: "Explore the academic achievements, project specifications, and professional resume of Anshuman Singh, Mathematics & Computing student at BITS Pilani.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">
        <div className="container">

          {/* GLOBAL HEADER NAVIGATION BAR */}
          <nav className="navbar">
            <div className="nav-logo">
              <Link href="/" style={{ fontClass: 'var(--font-outfit)', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', color: '#fff' }}>
                ANSH.DEV
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/experience">Experience</Link></li>
              <li><Link href="/education">Education</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* PAGE CONTENT */}
          {children}

        </div>
        <ChatWidget />
      </body>
    </html>
  );
}
