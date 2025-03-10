import Image from 'next/image'
import React from 'react'
import ScheduleButton from './scheduleButton'

interface ClarificationsProps {
  code: string
  selectedPlan: string
}

export default function Clarifications({ code, selectedPlan }: ClarificationsProps) {
  return (
    <div className='my-7 mx-8 w-full flex flex-col items-center font-display '>
      <p className=' text-[18px] sm:text-[26px] sm:text-[33px] font-semibold text-center'>O que vou receber após a minha reunião?</p>
      <div className='pt-8 flex flex-row items-start justify-center overflow-hidden'>
        <div className='flex flex-col items-center justify-start sm:w-[300px]'>
          <p className='text-[14px] sm:text-[22px] font-semibold'>Objectivos</p>
          <Image layout='responsive' src={'/objectivos.png'} alt={'Objectivos'} width={218} height={218} />
          <p className='text-[16px] sm:text-[28px] font-bold'>1.</p>
          <p className='text-[10px] sm:text-[22px] max-w-[75px] sm:max-w-[230px] text-center font-light'>Lista clara e organizada dos objectivos da construção e definição do programa de acordo com o seu budget</p>
        </div>
        <div className='flex flex-col items-center justify-start sm:w-[300px]'>
          <p className='text-[14px] sm:text-[22px] font-semibold'>Caminho</p>
          <Image layout='responsive' src={'/caminho.png'} alt={'Caminho'} width={218} height={218} />
          <p className='text-[16px] sm:text-[28px] font-bold'>2.</p>
          <p className='text-[10px] sm:text-[22px] max-w-[75px] sm:max-w-[230px] text-center font-light'>Enquadramento legal de acordo com o seu objectivo e todos o passos necessários até á conclusão da obra</p>
        </div>
        <div className='flex flex-col items-center justify-start sm:w-[300px]'>
          <p className='text-[14px] sm:text-[22px] font-semibold'>Orçamento</p>
          <Image layout='responsive' src={'/orcamento.png'} alt={'Orçamento'} width={218} height={218} />
          <p className='text-[16px] sm:text-[28px] font-bold'>3.</p>
          <p className='text-[10px] sm:text-[22px] max-w-[75px] sm:max-w-[230px] text-center font-light'>Orçamento explicativo e ajustado em função dos seus objectivos</p>
        </div>
      </div>
      <div className='my-16'>
        <ScheduleButton code={code} selectedPlan={selectedPlan}/>
      </div>
      <Image className='mt-4 mb-4' src={'/antesdepois.png'} alt={'Antes e Depois'} width={880} height={575} />
      <div className='my-16'>
        <ScheduleButton code={code} selectedPlan={selectedPlan}/>
      </div>
      <div className='mt-10 mb-10 flex flex-wrap sm:flex-nowrap sm:flex-row gap-8 sm:gap-20 justify-center'>
        <div className='max-w-[135px] sm:w-full flex flex-col items-center justify-start'>
          <Image layout='responsive' src={'/fita.png'} alt={'Terreno'} width={135} height={135} />
          <p className='text-[12px] sm:text-[16px] mt-4 font-bold text-center'>+ de 10 000m2</p>
          <p className='text-[10px] sm:text-[14px] font-light text-center'>Desenhados por nós</p>
        </div>
        <div className='max-w-[135px] sm:w-full flex flex-col items-center justify-start'>
          <Image layout='responsive' src={'/time.png'} alt={'Tempo'} width={135} height={135} />
          <p className='text-[12px] sm:text-[16px] mt-4 font-bold text-center'>+ de uma década</p>
          <p className='text-[10px] sm:text-[14px] font-light text-center'>de experiência</p>
        </div>
        <div className='max-w-[135px] sm:w-full flex flex-col items-center justify-start mt-4 sm:mt-0'>
          <Image layout='responsive' src={'/smiley.png'} alt={'Feliz'} width={135} height={135} />
          <p className='text-[12px] sm:text-[16px] mt-4 font-bold text-center'>Dezenas de Clientes</p>
          <p className='text-[10px] sm:text-[14px] font-light text-center'>felizes</p>
        </div>
      </div>
    </div>
  )
}
