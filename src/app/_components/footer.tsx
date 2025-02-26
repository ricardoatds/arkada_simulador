import React from 'react'

export default function Footer() {
  return (
    <footer className='relative bottom-0 mb-8 px-8 w-full mt-20 border-t border-gray-200'>
      <div className='max-w-[875px] mx-auto pt-8 px-4 flex flex-row justify-between items-center'>
        <p className='font-display text-[12px] sm:text-[18px] font-semibold'>
          Copyright © 2024 – Arkada
        </p>
        <a 
          href="/privacy-policy" 
          className='underline text-[12px] sm:text-[18px] font-semibold hover:font-bold font-display'
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  )
}
