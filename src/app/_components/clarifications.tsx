import Image from 'next/image'
import React from 'react'

export default function Clarifications() {
  return (
    <div className='my-10 flex flex-col items-center font-display '>
      <p className='text-[33px] font-semibold'>O que vou receber após a minha reunião?</p>
      <div className='pt-8 flex flex-row items-start justify-center'>
        <div className='flex flex-col items-center justify-start w-[300px]'>
          <p className='text-[22px] font-semibold'>Objectivos</p>
          <Image src={'/objectivos.png'} alt={'Objectivos'} width={218} height={218} />
          <p className='text-[28px] font-bold'>1.</p>
          <p className='max-w-[230px] text-center font-light'>Lista clara e organizada dos objectivos da construção e definição do programa de acordo com o seu budget</p>
        </div>
        <div className='flex flex-col items-center justify-start w-[300px]'>
          <p className='text-[22px] font-semibold'>Caminho</p>
          <Image src={'/caminho.png'} alt={'Caminho'} width={218} height={218} />
          <p className='text-[28px] font-bold'>2.</p>
          <p className='max-w-[230px] text-center font-light'>Enquadramento legal de acordo com o seu objectivo e todos o passos necessários até á conclusão da obra</p>
        </div>
        <div className='flex flex-col items-center justify-start w-[300px]'>
          <p className='text-[22px] font-semibold'>Orçamento</p>
          <Image src={'/orcamento.png'} alt={'Orçamento'} width={218} height={218} />
          <p className='text-[28px] font-bold'>3.</p>
          <p className='max-w-[230px] text-center font-light'>Orçamento explicativo e ajustado em função dos seus objectivos</p>
        </div>
      </div>
      <Image className='mt-40 mb-20' src={'/antesdepois.png'} alt={'Antes e Depois'} width={880} height={575} />
      <div className='mt-10 mb-10 flex flex-row gap-20'>
        <div className='flex flex-col items-center justify-start gap'>
          <Image src={'/expterreno.png'} alt={'Terreno'} width={135} height={135} />
          <p className='mt-4 font-bold text-center'>+ de 10 000m2</p>
          <p className='font-light text-center'>Desenhados por nós</p>
        </div>
        <div className='flex flex-col items-center justify-start'>
          <Image src={'/time.png'} alt={'Tempo'} width={135} height={135} />
          <p className='mt-4 font-bold text-center'>+ de uma década</p>
          <p className='font-light text-center'>de experiência</p>
        </div>
        <div className='flex flex-col items-center justify-start'>
          <Image src={'/smiley.png'} alt={'Feliz'} width={135} height={135} />
          <p className='mt-4 font-bold text-center'>Dezenas de Clientes</p>
          <p className='font-light text-center'>felizes</p>
        </div>
      </div>
    </div>
  )
}
