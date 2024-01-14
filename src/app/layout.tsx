import { ReactNode } from 'react';
import './globals.css';

type Props={children:ReactNode,modal:ReactNode}
export default function RootLayout({
  children,
  modal
}:Props ) {
  return (
    <div>
      {children}
      {modal}
    </div>
  )
}
