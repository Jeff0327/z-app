
import { ReactNode } from 'react';
type Props={children:ReactNode,modal:ReactNode}
export default function Layout({
  children,
  modal
}:Props ) {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      {children}
      {modal}
    </div>
  )
}
