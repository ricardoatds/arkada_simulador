import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
import JsonData from '../faq.json';

const formatAnswer = (answer: string) => {
  return answer.replace(/&nbsp;/g, '\n\t');
};

export default function FAQ() {
  return (
    <div className='max-w-[600px] my-10 font-display'>
      <h1 className='text-[18px] sm:text-3xl font-bold text-center'>Perguntas e Respostas</h1>
      <Accordion className='mt-4' type="single" collapsible>
        {
          JsonData.map((item, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger>
                <p className='text-[12px] sm:text-[16px] font-medium'>{item.q}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="whitespace-pre-wrap break-words pl-4 text-[10px] sm:text-[14px] font-light">
                  {formatAnswer(item.a)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}