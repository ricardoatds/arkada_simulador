import React from 'react'
import Underline from '../underline'
import Image from 'next/image'
import { IoIosArrowRoundBack } from "react-icons/io";

interface FirstStageProps {
  onBackClick: () => void
  onOptionSelected: (option: string) => void
}

export default function FirstStage(props: FirstStageProps) {
  return (
    <div>
      <div className='mt-16 flex flex-col items-center'>
        <div className='relative flex items-center justify-between w-full gap-2'>
          <Underline className='w-32 h-3 shrink-0' />
          <p className='max-w-[580px] font-display text-[18px] font-bold text-center flex-grow'>
            1. Que tipo de obra pretende fazer ?
          </p>
          <Underline className='w-32 h-3 shrink-0' />
        </div>
        <div className='mt-8 flex flex-row gap-4'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => {
              props.onOptionSelected('A')
            }}
          >
            <Image src={'/terreno.png'} alt={'Tenho um terreno'} width={165} height={192} />
            <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>Tenho um terreno e vou fazer uma casa</button>
          </div>

          <div>
            <div
              className='flex flex-col items-center cursor-pointer'
              onClick={() => {
                props.onOptionSelected('B')
              }}
            >
              <Image src={'/apartamento.png'} alt={'Remodelação de Apartamento'} width={165} height={192} />
              <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>Remodelação de um Apartamento</button>
            </div>
          </div>

          <div>
            <div
              className='flex flex-col items-center cursor-pointer'
              onClick={() => {
                props.onOptionSelected('C')
              }}
            >
              <Image src={'/moradia.png'} alt={'Remodelação de Moradia'} width={165} height={192} />
              <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>Remodelação de uma Moradia</button>
            </div>
          </div>
        </div>

      </div>
      <button
        className='mt-4 relative'
        onClick={() => {
          props.onBackClick()
        }}
      >
        <IoIosArrowRoundBack size={50}
        />
      </button>
    </div>
  )
}
