import React from 'react'
import Underline from '../underline'
import Image from 'next/image'
import { IoIosArrowRoundBack } from "react-icons/io";

interface SecondStageProps {
  onBackClick: () => void
  onOptionSelected: (option: string) => void
}

export default function SecondStage(props: SecondStageProps) {
  return (
    <div>
      <div className='mt-16 flex flex-col items-center'>
        <div className='relative flex items-center justify-between w-full gap-0'>
          <Underline className='w-70 h-3 shrink-0' />
          <p className='max-w-[580px] font-display text-[18px] font-bold text-center flex-grow'>
            2. Qual o tamanho da sua obra ?
            <br/>
            <span>Area Bruta</span>
          </p>
          <Underline className='w-70 h-3 shrink-0' />
        </div>
        <div className='mt-8 flex flex-row gap-4'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => {
              props.onOptionSelected('A')
            }}
          >
            <Image src={'/escala01.png'} alt={'Escala01'} width={165} height={192} />
            <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>Até 80 m2</button>
          </div>

          <div>
            <div
              className='flex flex-col items-center cursor-pointer'
              onClick={() => {
                props.onOptionSelected('B')
              }}
            >
              <Image src={'/escala02.png'} alt={'Escala02'} width={165} height={192} />
              <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>80 a 150 m2</button>
            </div>
          </div>

          <div>
            <div
              className='flex flex-col items-center cursor-pointer'
              onClick={() => {
                props.onOptionSelected('C')
              }}
            >
              <Image src={'/escala03.png'} alt={'Escala03'} width={165} height={192} />
              <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>150 a 250 m2</button>
            </div>
          </div>

          <div>
            <div
              className='flex flex-col items-center cursor-pointer'
              onClick={() => {
                props.onOptionSelected('C')
              }}
            >
              <Image src={'/escala04.png'} alt={'Escala04'} width={165} height={192} />
              <button className='w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md'>+ 250 m2</button>
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
