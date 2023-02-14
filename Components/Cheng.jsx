import {useState} from 'react'
import './Cheng.css'

function Cheng(){
    const[selected,setSelected]= useState(null)
    
    const toggle=(i)=>{
        if(selected  === i){
            return setSelected(null)

        }
        setSelected(i)
    }
  return (
    <div className="wrapper">
        <div className="accordian">
            {
                data.map((item, i) =>(
                    <div className="item">
                        <div className="title" onClick={() =>toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-':'+'}</span>
                            
                        </div>
                        <div 
                            className={
                                selected===i?'content show':'content'
                                }>
                        
                                {item.answer}
                        </div>
                    </div>
                )
                ) 
            }

        </div>
    </div>

  )
}

const data=[
    {
        question: 'How satisfied are you with our services?',
            answer:'Very satisfied.I am highly impressed with the quality of services I have received.'
    },
    {
        question:'How great is the risk that results do not meet my expectations?',
            answer:'The risk of results not meeting your expectations depends on a variety of factors,such as the complexity of the project,the quality of materials used,and the expertise of the people working on it.'
    },
    {
        question:'How did you hear about our company?',
            answer:'I learned about your company through an online search for businesses in the area that provide the services you offer.'
    },
    {
        question:'How you would handle a customer who was upset about a known problem with your service?',
            answer:'The hiring manager wants to know if youre able to handle difficult issues, like a defective product.This is another great opportunity to share an anecdote from a past position if you have one.'
    },
    {
        question:'What do you think of our companys services?',
            answer:'You may get asked this question to demonstrate that youve done some research into what the company does and sells.'
    },
]

export default Cheng