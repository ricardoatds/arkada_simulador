import React from 'react'

interface ScheduleButtonProps {
  code: string;
  selectedPlan: string;
}

export default function ScheduleButton({code, selectedPlan}: ScheduleButtonProps) {
  const queryParams = '?code=' + code + '&plan=' + selectedPlan;
  return (
    <button
          className='mt-8 w-[200px] h-[40px] sm:w-[300px] sm:h-[60px] font-display text-[18px] font-medium text-white bg-black rounded-lg'
          onClick={() => window.open('https://calendly.com/arkada/15min' + queryParams, '_blank')}
        >
          Agendar Reunião
        </button>
  )
}
