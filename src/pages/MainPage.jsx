import { Pencil } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const MainPage = () => {

  const[isEditingTitle,setIsEditingTitle] = useState(false);
  const {invoiceTitle,setInvoiceTitle} = useContext(AppContext);

  const handleTitleChang = (e) =>{
    const newTitle = e.target.value;
    setInvoiceTitle(newTitle);
  }
  const handleTitleEdit = () =>{
    setIsEditingTitle(true);
  }
  const handleTitleBlur = () =>{
    setIsEditingTitle(false);
  }
  return (
    <div className='container min-h-screen p-6 bg-blue-300 '>
      <div className='container px-4 mx-auto max-w-5xl'>
        {/* Title Bar */}
        <div className='bg-white border rounded shadow-sm p-3 mb-4 '>
          <div className='flex items-center'>
            {isEditingTitle ? ( 
                <input type='text' 
                  className='w-full rounded p-1 focus:outline-blue-500' 
                  autoFocus
                  onBlur={handleTitleBlur}
                  onChange={handleTitleChang}
                  value={invoiceTitle}
                 />
                 
            ) : (
              <>
                <h5 className='mb-0 me-2 font-medium'>{invoiceTitle}</h5>
                <button className='p-0 bg-transparent border-0 cursor-pointer' onClick={handleTitleEdit}>
                  <Pencil className='text-blue-800' size={20}/>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Invoice form and template grid */}
        <div className='flex flex-col lg:flex-row gap-6  items-stretch '>
          {/* invoice form */}
          <div className='w-full flex lg:w-1/2'>
            <div className='bg-white border rounded shadow-sm p-4 w-full'>
              invoice form
            </div>
          </div>

          {/* template grid*/}
          <div className='w-full flex lg:w-1/2'>
            <div className='bg-white border rounded shadow-sm p-4 w-full'>
              Template Grid
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default MainPage
