import React from 'react'

interface ScheduleButtonProps {
  code: string;
  selectedPlan: string;
}

export default function ScheduleButton({code, selectedPlan}: ScheduleButtonProps) {
  return (
    <button
          className='mt-8 w-[200px] h-[40px] sm:w-[300px] sm:h-[60px] font-display text-[18px] font-medium text-white bg-black rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-101 drop-shadow-xl'
          onClick={() => window.open(`https://tidycal.com/arkada/reuniaodeprojecto-${code.toLocaleLowerCase()}`, '_blank')}
        >
          Agendar Reunião
        </button>
  )
}
