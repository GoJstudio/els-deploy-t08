import { Footer, Header } from './layoutSections';

import './globals.scss';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ELS Power Website',
  description: 'This is main landing page of ELS Power website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
