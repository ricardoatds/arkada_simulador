import React, { useState } from 'react'
import Underline from '../underline'
import Image from 'next/image'
import { IoIosArrowRoundBack } from "react-icons/io";

interface ThirdStageProps {
  onBackClick: () => void
  onOptionSelected: (option: string) => void
}

export default function ThirdStage(props: ThirdStageProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if(selectedOption) return; // Prevents multiple clicks
    setSelectedOption(option);
    setTimeout(() => {
      props.onOptionSelected(option);
    }, 500);
  };

  return (
    <div>
      <div className='fade-in mt-16 flex flex-col items-center'>
        <div className='relative flex items-center justify-between w-full gap-2'>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
          <p className='max-w-[580px] font-display text-[14px] sm:text-[18px] font-bold text-center flex-grow'>
            3. A sua obra Situa-se dentro a zona indicada ?
            <br />
            <span className='font-medium text-[12px] sm:text-[14x]'>Zona de Lisboa</span>
          </p>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
        </div>
        <div className='mt-8 flex flex-row-reverse sm:flex-row'>
          <div className='flex flex-col justify-center gap-10 ml-4 sm:ml-0'>
            <button
              className={`w-[100px] sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[14px] font-light rounded-md flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 ${selectedOption === 'A' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}
              onClick={() => handleOptionClick('A')}
            >
              Sim
            </button>
            <button
              className={`w-[100px] sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[14px] font-light rounded-md flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 ${selectedOption === 'B' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}
              onClick={() => handleOptionClick('B')}
            >
              Não
            </button>
          </div>
          <Image className='overflow-hidden w-[200px] sm:w-[350px]' src={'/mapa.png'} alt={'Mapa'} width={350} height={350} />
        </div>

      </div>
      <button
        className='mt-4 relative transition-all duration-300 ease-in-out transform hover:translate-y-1'
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
