import React from 'react'
import Image from 'next/image'
import Underline from './underline'

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <>
      <Image className={className} src={'/logo.png'} alt={'Arkada'} width={157} height={30} />
      <p className='mt-8 max-w-[600px] font-display text-[20px] sm:text-[33px] font-semibold text-center'>
        Orçamentos de Arquitectura <br /> personalizados em apenas&nbsp;
        <span className='relative inline-block'>
          <span>3 passos</span>
          <span className='absolute inset-x-0 bottom-0 h-2'>
            <Underline className='w-full h-full' />
          </span>
        </span>
      </p>
    </>
  )
}

export default Header
