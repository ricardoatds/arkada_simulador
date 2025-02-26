import React from 'react'
import Underline from '../underline'
import Image from 'next/image'
import { IoIosArrowRoundBack } from "react-icons/io";

interface ThirdStageProps {
  onBackClick: () => void
  onOptionSelected: (option: string) => void
}

export default function ThirdStage(props: ThirdStageProps) {
  return (
    <div>
      <div className='mt-16 flex flex-col items-center'>
        <div className='relative flex items-center justify-between w-full gap-2'>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
          <p className='max-w-[580px] font-display text-[14px] sm:text-[18px] font-bold text-center flex-grow'>
            3. A sua obra Situa-se dentro a zona indicada ?
            <br/>
            <span>Zona de Lisboa</span>
          </p>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
        </div>
        <div className='mt-8 flex flex-row'>
          <div className='flex flex-col justify-center justify-items-end gap-10'>
            <button className='w-[100] sm:w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md' onClick={()=> props.onOptionSelected('A')}>Sim</button>
            <button className='w-[100] sm:w-[185] p-2 font-display text-[14px] font-light text-black border-1 border-black rounded-md' onClick={()=> props.onOptionSelected('B')}>Não</button>
          </div>
          <Image className='overflow-hidden' layout='responsive' src={'/mapa.png'} alt={'Mapa'} width={350} height={350} />
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
