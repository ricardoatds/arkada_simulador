import React from 'react'
import Underline from '../underline'
import Image from 'next/image'

interface HeaderProps {
  className?: string;
}

export default function ResultHeader({ className }: HeaderProps) {
  return (
    <>
      <Image className={className} src={'/logo.png'} alt={'Arkada'} width={157} height={30} />
      <p className='mt-8 max-w-[600px] font-display text-[20px] sm:text-[33px] font-semibold text-center'>
        Fantástico! Para o seu tipo de projeto temos
        <span className='relative inline-block mx-1'>
          <span>3 planos</span>
          <span className='absolute inset-x-0 bottom-0 h-2'>
            <Underline className='w-full h-full' />
          </span>
        </span>
        disponíveis
      </p>
    </>
  )
}
