import React from 'react'
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection'
import Image from 'next/image';

interface PROPS{
  selectedTemplate?: TEMPLATE;
}

export default function FormSection({selectedTemplate}: PROPS) {
  return (
    <div className='p-5 shadow-md border rounded-lg'>
     {selectedTemplate?.icon && 
       <Image src={selectedTemplate.icon} alt='icon' width={70} height={70}/>
     }
     <h2> {selectedTemplate?.name} </h2>
    </div>
  )
}
