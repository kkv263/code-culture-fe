'use client'

import { ReactElement, useState } from 'react';

type AccordionProps = {
  content: {
    title: string,
    href: string,
    content: React.ReactElement
  }[]
} 

const Accordion = ({content}: AccordionProps) => {
  return (
    <ul>
      {content.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} href={item.href}/>
      ))}
    </ul>
  )
}

const AccordionItem = ({title, href, content}: {title:string, href:string, content:ReactElement}) => {
  const [active, setActive] = useState(false)

  return (
    <li data-active={active} className=' mb-1 border border-black max-h-[68px] overflow-hidden data-[active=true]:max-h-[10000px] transition-all duration-500 ease'>
    <div id={href} className='-mt-20 pt-20'></div>
    <button onClick={() => {setActive(!active)}} className="w-full" type="button">
      <h3 className='text-3xl font-mono p-4 flex justify-between items-center'>
        <span>{title}</span>
        <span data-active={active} className='font-sans leading-none data-[active=true]:rotate-45 transition-transform duration-300'>+</span>
      </h3>
      </button>
    <div className='px-4'>
      {content}
    </div>
  </li>
  )
}

export default Accordion