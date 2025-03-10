'use client'
import Image from 'next/image'
import FirstStage from './firstStage'
import SecondStage from './secondStage'
import ThirdStage from './thirdStage'
import Result from './result'
import Header from '../headers/header'
import ResultHeader from '../headers/resultHeader'
import { useSessionStorage } from 'usehooks-ts'
import { useEffect, useState } from 'react'

export default function Form() {
  const [stage, setStage] = useSessionStorage('form-stage', 0)
  const [code, setCode] = useSessionStorage<string[]>('form-code', [])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (code.length === 0 && stage !== 0) {
      setStage(0)
    }
  }, [])

  if (!isClient) {
    return <div className="min-h-screen" /> // or loading state
  }

  const overView = () => {
    return (
      <div className='flex flex-col items-center fade-in'>
        <p className='mt-8 sm:max-w-[600px] font-display text-[14px] sm:text-[18px] font-light text-center'>
          <span className='font-semibold'>Poupe até 20% </span>
          do valor de construção com um projecto
          <br />
          adequado ás suas exigências em
          <span className='font-semibold'>&nbsp;apenas algumas semanas</span>
        </p>
        <Image className='mt-8' src={'/overview.png'} alt={'Projecto'} width={297} height={297} />
        <button
          className='mt-8 w-[225px] h-[40px] font-display text-[18px] font-medium text-white bg-black rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 drop-shadow-xl active:opacity-0'
          onClick={() => setStage(1)}
        >
          Começar
        </button>
      </div>
    )
  }

  if (stage == 1) {
    return <>
      <Header className="mt-14" />
      <FirstStage
        onOptionSelected={(option: string) => {
          setCode([option])
          setStage(2)
        }}
        onBackClick={() => setStage(0)}
      />
    </>
  }

  if (stage == 2) {
    return <>
      <Header className="mt-14" />
      <SecondStage
        onOptionSelected={(option: string) => {
          setCode([...code, option])
          setStage(3)
        }}
        onBackClick={() => setStage(1)}
      />
    </>
  }

  if (stage == 3) {
    return <>
      <Header className="mt-14" />
      <ThirdStage

        onOptionSelected={(option: string) => {
          setCode([...code, option])
          setStage(4)
        }}
        onBackClick={() => setStage(2)}
      />
    </>
  }

  if (stage == 4) {
    return <>
      <ResultHeader className='mt-14' />
      <Result
        finalCode={code.join('')}
      />
    </>
  }



  return (
    <>
      <Header className="mt-14" />
      {overView()}
    </>
  )
}