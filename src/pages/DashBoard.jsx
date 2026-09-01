import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { getAllInvoices } from '../services/invoiceService';
import toast from 'react-hot-toast';
import { Plus } from 'lucide-react';
import { formatDate } from '../utils/formatInvoiceData';

const DashBoard = () => {
  const [invoice,setInvoice] = useState([]);
  const {baseUrl} = useContext(AppContext);

  useEffect(()=>{
    const fetchInvoices = async ()=>{
      try{
        const response = await getAllInvoices(baseUrl);
        setInvoice(response.data);
      }catch (error){
        toast.error("Failed to load invoices ",error);
      }
    }
    fetchInvoices();
  },[baseUrl]);
  return (
    <div className='p-5 w-full'>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5'>

        <div className='w-full min-w-0'>
          <div className='flex h-full w-full flex-col justify-center items-center border-2 border-gray-300 shadow-sm cursor-pointer' style={{minHeight:'270px'}}>
            <Plus size={48}/>
            <p className='font-medium'>Create New Invoice</p>
          </div>
        </div>

        {invoice.map((invoice,idx)=>(
          <div key={idx} className='w-full min-w-0'>
            <div className='w-full overflow-hidden shadow-sm cursor-pointer' style={{minHeight:'270px'}}>
              {invoice.thumbnailUrl && (
                <img src={invoice.thumbnailUrl} alt="Invoice thumbnail" style={{height:'250px'}}  className='block w-full h-[250px] object-cover'/>
              )}
              <div className='p-2'>
                <h6  className="truncate font-medium" >{invoice.title}</h6>
                <small className='disabled:'>
                  Last Update: {formatDate(invoice.lastUpdatedAt)}
                </small>
              </div>

            </div>

          </div>

        ))}

      </div>
     
    </div>
  )
}

export default DashBoard
