import type { Metadata } from "next";
import { Inter } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/layouts/NavigationBar';
import '../styles/main.scss';

import Footer from './components/layouts/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inits Blog App",
  description: "Forum for INITS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky-top bg-opacity-75 bg-white">
         <NavigationBar/>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
