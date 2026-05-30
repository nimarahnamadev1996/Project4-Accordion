import React from 'react'


import data from '../data/data'
import AccordionItem from './AccordionItem'


const Accordion = () => {


  return (
    <div className="accordion-container">
        <h3 className="faq">Frequently Asked Questions (FAQ's)</h3>
        
        {
           data.map((item,index) => (
            <AccordionItem item={item} number={index}/>
           )) 
        }
    </div>
  )
}

export default Accordion