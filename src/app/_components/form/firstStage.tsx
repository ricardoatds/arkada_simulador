import React, { useState } from 'react'
import Underline from '../underline'
import Image from 'next/image'
import { IoIosArrowRoundBack } from "react-icons/io";

interface FirstStageProps {
  onBackClick: () => void
  onOptionSelected: (option: string) => void
}

export default function FirstStage(props: FirstStageProps) {
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
      <div className='fade-in mt-16 flex flex-col max-w-screen items-center'>
        <div className='relative flex items-center justify-between w-full sm:gap-2 mx-6'>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
          <p className='max-w-[200px] sm:max-w-[580px] font-display text-[14px] sm:text-[18px] font-bold text-center flex-grow'>
            1. Que tipo de obra pretende fazer ?
          </p>
          <Underline className='w-20 sm:w-32 h-3 shrink-0' />
        </div>
        <div className='mt-8 flex flex-row gap-0 sm:gap-4'>
          <div
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('C')}
          >
            <Image layout='responsive' src={'/terreno.png'} alt={'Tenho um terreno'} width={165} height={192} />
            <button className={`w-[100px] sm:w-[185px] h-[56px] p-1 sm:p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'C' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span className='py-2 text-center'>Tenho um terreno e vou fazer uma casa</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('A')}
          >
            <Image layout='responsive' src={'/apartamento.png'} alt={'Remodelação de Apartamento'} width={165} height={192} />
            <button className={`w-[100px] sm:w-[185px] h-[56px] p-1 sm:p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'A' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span className='py-2 text-center'>Remodelação de um Apartamento</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('B')}
          >
            <Image layout='responsive' src={'/moradia.png'} alt={'Remodelação de Moradia'} width={165} height={192} />
            <button className={`w-[100px] sm:w-[185px] h-[56px] p-1 sm:p-2 font-display text-[12px] sm:text-[14px] font-light text-black border-1 border-black rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'B' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span className='py-2 text-center'>Remodelação de uma Moradia</span>
            </button>
          </div>
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
