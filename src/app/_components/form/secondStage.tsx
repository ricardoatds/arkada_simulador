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
      <div className='mt-16 flex-col items-center'>
        <div className='relative flex items-center justify-between w-full gap-0'>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
          <p className='sm:max-w-[580px] font-display text-[14px] sm:text-[18px] font-bold text-center flex-grow'>
            2. Qual o tamanho da sua obra ?
            <br />
            <span>Area Bruta</span>
          </p>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
        </div>
        <div className='mt-8 grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-4 px-4 sm:px-0'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => {
              props.onOptionSelected('A')
            }}
          >
            <Image layout='responsive' src={'/escala01.png'} alt={'Escala01'} width={165} height={192} />
            <button className='w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center'>
              <span>Até 80 m2</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => {
              props.onOptionSelected('B')
            }}
          >
            <Image layout='responsive' src={'/escala02.png'} alt={'Escala02'} width={165} height={192} />
            <button className='w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center'>
              <span>80 a 150 m2</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => {
              props.onOptionSelected('C')
            }}
          >
            <Image layout='responsive' src={'/escala03.png'} alt={'Escala03'} width={165} height={192} />
            <button className='w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center'>
              <span>150 a 250 m2</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => {
              props.onOptionSelected('D')
            }}
          >
            <Image layout='responsive' src={'/escala04.png'} alt={'Escala04'} width={165} height={192} />
            <button className='w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center'>
              <span>+ 250 m2</span>
            </button>
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
