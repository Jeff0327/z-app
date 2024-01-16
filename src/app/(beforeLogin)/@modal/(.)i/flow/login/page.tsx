'use client';
import LoginModal from '@/src/app/(beforeLogin)/_components/LoginModal';
export default function Page(){

    

    
    return (
        <div className="absolute left-1/2 top-1/2">
            <div className="bg-black w-20">
            <button className='bg-white'>
            <svg width={24} viewBox='0 0 24 24' aria-hidden="true" className='r-18jsvk2 r-4qtqp9 r0yyyyoo r-z80fyv r0dnmrzs r-bnwqim r-1plorui r-lrvibr r-19wmn83'>
            <g>
                <path
                  d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
            </button>
            </div>
            
            <div>
            <LoginModal />
            </div>

        </div>
        
    )
}