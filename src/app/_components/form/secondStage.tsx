import React, { useState } from 'react'
import Underline from '../underline'
import Image from 'next/image'
import { IoIosArrowRoundBack } from "react-icons/io";

interface SecondStageProps {
  onBackClick: () => void
  onOptionSelected: (option: string) => void
}

export default function SecondStage(props: SecondStageProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    if (selectedOption) return; // Prevents multiple clicks
    setSelectedOption(option);
    setTimeout(() => {
      props.onOptionSelected(option);
    }, 500);
  };

  return (
    <div>
      <div className='fade-in mt-16 flex-col items-center'>
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
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('A')}
          >
            <Image className='max-w-[185x]' layout='responsive' src={'/escala01.png'} alt={'Escala01'} width={165} height={192} />
            <button className={`w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'A' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span>Até 80 m2</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('B')}
          >
            <Image className='max-w-[185x]' layout='responsive' src={'/escala02.png'} alt={'Escala02'} width={165} height={192} />
            <button className={`w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'B' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span>80 a 150 m2</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('C')}
          >
            <Image className='max-w-[185x]' layout='responsive' src={'/escala03.png'} alt={'Escala03'} width={165} height={192} />
            <button className={`w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'C' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span>150 a 250 m2</span>
            </button>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'
            onClick={() => handleOptionClick('D')}
          >
            <Image className='max-w-[185x]' layout='responsive' src={'/escala04.png'} alt={'Escala04'} width={165} height={192} />
            <button className={`w-full sm:w-[185px] h-[48px] sm:h-[56px] p-2 font-display text-[12px] sm:text-[14px] font-light rounded-md flex items-center justify-center transition-colors duration-300 ${selectedOption === 'D' ? 'bg-[#ffa629] border-white text-white border-0' : 'text-black border-1 border-black'}`}>
              <span>+ 250 m2</span>
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
