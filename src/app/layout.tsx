import { ReactNode } from 'react';
import './globals.css';

type Props={children:ReactNode}
export default function RootLayout({
  children,
  
}:Props ) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
