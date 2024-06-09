import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toaster from '@/components/Toaster'

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Abid",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="backgroundColor" >
      <body className={roboto.className}>
      <div className="">
      <Header/>
       <main className="max-w-6xl mx-auto lg:px-10 xs:w-full">
          {children}
        </main>
      <Footer/>  </div> 
      <Toaster toastOptions={{
        style: {
          background: 'white',
          color: '#3C3C59'
        }
      }}/>   
      </body>
    </html>
  );
}


