import React, { useContext, useRef, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { templates } from '../assets/assets';
import InvoicePreview from '../components/InvoicePreview';
import { saveInvoice } from '../services/invoiceService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PreviewPage = () => {
  const previewRef = useRef();
  const {setSelectedTemplate, selectedTemplate, invoiceData, baseUrl} = useContext(AppContext);
  const [loading,setLoading] =useState(false);
  const navigate = useNavigate();

  const handleSaveAndExit = async () =>{
    try{
      setLoading(true);
      //TODO : create thumbnail url
      const payLoad = {
        ...invoiceData,
        template : selectedTemplate
      }

      console.log("payload : ",payLoad);
      
      const response = await saveInvoice(baseUrl,payLoad);

      console.log("API response:", response);
      console.log("API status:", response?.status);


      if (response?.status === 200 || response?.status === 201) {
        toast.success("Invoice saved successfully.");
        navigate("/dashboard");
      } else {
        toast.error("Something went wrong.");
      }

    }catch (error){
      console.error("Save invoice error : ",error);
      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Failed to save invoice"
      );
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className=' previewpage min-h-screen flex flex-col p-3 w-full px-4'>

      {/* Action Buttons  */}
      <div className='flex flex-col items-center mb-4 gap-3'>

        {/* List of Templates buttons  */}
        <div className='flex gap-3 justify-center flex-wrap '>
          {templates.map(({id, label})=>(
            <button 
              key={id}
              onClick={()=>setSelectedTemplate(id)}
              className={`p-2 cursor-pointer text-gray-600 rounded-full border hover:text-white border-gray-500 ${selectedTemplate === id ? "bg-blue-500 text-white hover:bg-blue-500": "bg-transparent  hover:bg-gray-500" }  `} >{label}
              </button>
          ))}
        </div>

        {/* List of Action Buttons  */}
        <div className='flex gap-3 justify-center flex-wrap'>
          <button className='rounded bg-blue-500 text-white p-2 cursor-pointer' onClick={handleSaveAndExit} disabled={loading}>
            {loading && <Loader2 className='me-2 spin-animation' size={18}/>}
            {loading ? "Saving..." : "Save and Exit"}
          </button>
          <button className='rounded bg-red-500 text-white p-2 cursor-pointer'>Delete Invoice</button>
          <button className='rounded bg-gray-500 text-white p-2 cursor-pointer'>Back to Dashboard</button>
          <button className='rounded bg-cyan-500 text-white p-2 cursor-pointer'>Send Email</button>
          <button className='rounded bg-emerald-500 text-white p-2 cursor-pointer'>Download PDF</button>
        </div>

      </div>

      {/* Displaying the invoice Preview or PDF  */}
      {/* grow overflow-auto flex justify-center items-start bg-gray-200  py-3 */}
      <div className='grow overflow-auto items-start bg-gray-200  py-3  px-2 sm:px-3'>
            {/* invoice-preview */}
        <div className='w-full flex justify-center items-start'>
          <InvoicePreview 
            ref={previewRef}
            invoiceData={invoiceData} 
            template={selectedTemplate} />
        </div>

      </div>
      
    </div>
  )
}

export default PreviewPage
