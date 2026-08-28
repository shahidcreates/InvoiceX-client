import { Pencil } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import InvoiceForm from '../components/InvoiceForm';
import TemplateGrid from '../components/TemplateGrid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

  const[isEditingTitle,setIsEditingTitle] = useState(false);

  const navigate = useNavigate();

  const {
    invoiceTitle,setInvoiceTitle, 
    setSelectedTemplate, invoiceData,setInvoiceData
  } = useContext(AppContext);

  const handleTemplateClick = (templateId) => {
    const hasIvalidItem = invoiceData.items.some((item)=> !item.qty || !item.amount);
    if(hasIvalidItem){
      toast.error("Please enter quantity and amount for all items.");
      return;
    }
    setSelectedTemplate(templateId);
    navigate("/preview")
  }
  
  const handleTitleChang = (e) =>{
    const newTitle = e.target.value;
    setInvoiceTitle(newTitle);
    setInvoiceData((prev)=>({
      ...prev,
      title: newTitle
    }));
  }

  const handleTitleEdit = () =>{
    setIsEditingTitle(true);
  }

  const handleTitleBlur = () =>{
    setIsEditingTitle(false);
  }

  return (
    <div className='min-h-screen p-6 w-full bg-blue-300 '>
      <div className=' px-4 mx-auto w-full max-w-6xl '>
        {/* Title Bar */}
        <div className='bg-white border rounded shadow-sm  p-3 mb-4 '>
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
              <InvoiceForm />
            </div>
          </div>

          {/* template grid*/}
          <div className='w-full flex lg:w-1/2'>
            <div className='bg-white border rounded shadow-sm p-4 w-full'>
              <TemplateGrid onTemplateClick={handleTemplateClick}/>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default MainPage
