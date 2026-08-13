import React from 'react'

const StepsCard = ({step}) => {
  return (
    <div className='p-8 text-center rounded-2xl shadow-sm hover:shadow-2xl hover:scale-125 active:shadow-2xl'  style={{backgroundColor:step.bg}}>
        <div style={{backgroundColor:step.bg}}>
            <span className='text-5xl font-bold' style={{color:step.color}}>{step.number}</span>
        </div>
        <div className=''>
            <h3 className='mt-4 text-xl font-semibold'>{step.title}</h3>
            <p className='mt-3 text-gray-600 font-bold'>{step.description}</p>
        </div>
    </div>
  );
}

export default StepsCard;
