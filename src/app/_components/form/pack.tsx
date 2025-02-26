import React from 'react'
import Underline from '../underline'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



interface PackProps {
  onSelected: (option: string) => void
  highlighted: boolean,
  name: string,
  finalPrice: number,
  vatPrice: number,
  featuresIncluded: string[],
  featuresNotIncluded: string[],
}

const formatPrice = (price: number): string => {
  return price.toLocaleString('de-DE', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
}

export default function Pack(props: PackProps) {
  return (
    <div 
    className={`flex flex-col cursor-pointer w-full sm:w-[280px] gap-2 border rounded-sm ${props.highlighted ? 'border-black border-2' : ''}`}
    onClick={() => {
      props.onSelected(props.name)
    }}
    >
      <span className='pt-2 sm:pt-4 pb-1 sm:pb-2 relative flex flex-col items-center text-[14px] sm:text-[20px]'>
        <span className={`inline-block ${props.highlighted ? 'font-bold' : ''}`}> {props.name} </span>
        <Underline 
          className={`h-3 ${props.highlighted ? 'w-30 sm:w-30' : 'w-0'}`}
        />
      </span>
        <div className='flex flex-col h-[50px] sm:h-[108px] bg-price-gray items-center py-1 sm:py-4'>
          <span className='text-[16px] sm:text-[28px] sm:text-[34px] font-black font-bold opacity-100'>{formatPrice(props.finalPrice)}€</span>
          <span className='text-[12px] sm:text-[14px] sm:text-[16px] text-[#000] font-light opacity-100'>{formatPrice(props.vatPrice)}€ c/IVA</span>
        </div>
      <div className='px-4 pb-4 flex flex-col -gap-1 sm:gap-1'>
        {props.featuresIncluded.map((feature, index) => {
          return (
            <div className='flex flex-row gap-2 items-start' key={index}>
              <div className='w-[22px] h-[22px] flex items-center justify-center -mt-1 sm:mt-[2px]'>
                <FaCheck className='text-green-500 text-[10px] sm:text-[14px]' />
              </div>
              <span className='text-[10px] sm:text-[14px] font-light flex-1'>{feature}</span>
            </div>
          )
        })}
        {props.featuresNotIncluded.map((feature, index) => {
          return (
            <div className='flex flex-row gap-2 items-start' key={index}>
              <div className='w-[22px] h-[22px] flex items-center justify-center -mt-1 sm:mt-[2px]'>
                <RxCross2 className='text-red-500 text-[10px] sm:text-[14px]' />
              </div>
              <span className='text-[10px] sm:text-[14px] font-light flex-1'>{feature}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
