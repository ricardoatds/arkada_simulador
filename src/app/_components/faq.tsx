import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
import JsonData from '../faq.json';

const formatAnswer = (answer: string) => {
  return answer.replace(/&nbsp;/g, '\n\t');
};

export default function FAQ() {
  return (
    <div className='max-w-[600px] my-10'>
      <h1 className='text-3xl font-bold text-center'>Perguntas e Respostas</h1>
      <Accordion className='mt-4' type="single" collapsible>
        {
          JsonData.map((item, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger>
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="whitespace-pre pl-4">
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

/*

<AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

*/