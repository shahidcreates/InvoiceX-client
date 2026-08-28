import React from 'react'
import { templates } from '../assets/assets'

const TemplateGrid = ({onTemplateClick}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3'>

      {templates.map(({id,label,image,})=>(
        <div className='w-full ' key={id}>
          <div className='border rounded shadow-sm overflow-hidden template-hover cursor-pointer' title={label} onClick={()=>onTemplateClick(id)} >
            <img src={image} alt={label} loading='lazy' className='w-full' />
            <div className='p-2 text-center font-medium'>{label}</div>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default TemplateGrid
