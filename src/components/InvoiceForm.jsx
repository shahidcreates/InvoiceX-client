import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { FileUp, Trash, Trash2, TrashIcon } from 'lucide-react'
import { AppContext } from '../context/AppContext';

const InvoiceForm = () => {
    const {invoiceData,setInvoiceData} = useContext(AppContext);

    const addItem = ()=>{
        setInvoiceData((prev)=>({
            ...prev,
            items:[
                ...prev.items,
                {name:"", qty:"", amount:"",description:"", total:0},
            ]
        }))
    }
    const delelteItem = (idx)=>{
        setInvoiceData((prev)=>({
            ...prev,
            items:prev.items.filter((_,i)=> i != idx)
        }));
    }

    const handleChange=(section,field,value)=>{
        setInvoiceData((prev)=>(
            {
                ...prev,
                [section]: {...prev[section], [field]: value}
            }
        ))
    }

    const handleSameAsBilling=()=>{
        setInvoiceData((prev)=>({
            ...prev,
            shipping:{...prev.billing}
        }))
    }

    const handleItemChange =(idx,field,value)=>{
        const items = [...invoiceData.items];
        items[idx][field] = value;
        if(field === "qty" || field === "amount"){
            items[idx].total = (items[idx].qty || 0) * (items[idx].amount ||0);
        }
        setInvoiceData((prev)=>({
            ...prev,
            items
        }))

    }

    const calculatesTotals=()=>{
        const subTotal = invoiceData.items.reduce((sum,item) => sum + (item.total || 0),0);
        const taxRate = Number(invoiceData.tax || 0);
        const taxAmount = (subTotal * taxRate) / 100;
        const grandTotal = subTotal+taxAmount;
        return {subTotal, taxAmount ,grandTotal};
    }
    const {subTotal,taxAmount,grandTotal} = calculatesTotals();

    const handleLogoUpload = (e) =>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setInvoiceData((prev)=>({
                    ...prev,
                    logo: reader.result
                }))
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(()=>{
        if(!invoiceData.invoice.number){
            const randomNumber = `INV-${Math.floor(100000 + Math.random()*900000)}`;
            setInvoiceData((prev)=>({
                ...prev,
                invoice:{...prev.invoice, number:randomNumber}
            }))
        }
    },[]);


    return(
    <div className='py-4'>
        {/* company logo */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Compary Logo</h5>
            <div className="flex items-center gap-3">
                <label htmlFor='image'>
                    {/* <img src={assets.upload_area} alt="upload" width={48} /> */}
                    {invoiceData.logo ? <img src={invoiceData.logo} alt="Logo" width={58}  /> : (
                        <div className='flex justify-center items-center border border-blue-450 hover:bg-gray-500 cursor-pointer bg-gray-400 text-white rounded-2xl p-1'>
                            <h2 className='text-xl'>Upload</h2>
                            <FileUp size={38} />
                        </div>
                    )}
                </label>
                <input type="file" name='logo' id='image' hidden accept='image/*' 
                onChange={handleLogoUpload}/>
            </div>
        </div>

        {/* Company Info */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Your Company</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Company name'
                    onChange={(e)=>{handleChange("company","name",e.target.value)}} value={invoiceData.company.name} />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Company phone' 
                     onChange={(e)=>{handleChange("company","number",e.target.value)}} value={invoiceData.company.number}/>
                </div>
                <div className="w-full md:col-span-2">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Company address' 
                     onChange={(e)=>{handleChange("company","address",e.target.value)}} value={invoiceData.company.address}/>
                </div>
            </div>
        </div>

        {/* Bill to */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Bill To</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Name' 
                    onChange={(e)=>{handleChange("billing","name",e.target.value)}} value={invoiceData.billing.name}/>
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Phone' 
                     onChange={(e)=>{handleChange("billing","phone",e.target.value)}} value={invoiceData.billing.phone}/>
                </div>
                <div className="w-full md:col-span-2">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Address' 
                     onChange={(e)=>{handleChange("billing","address",e.target.value)}} value={invoiceData.billing.address}/>
                </div>
            </div>
        </div>

        {/* ship to */}
        <div className='mb-4'>
            <div className='flex justify-between items-center'>
                <h5 className='text-lg font-medium'>Ship To</h5>
                <div className='flex items-center gap-1 '>
                    <input type='checkbox' className='w-[15px] h-[15px] cursor-pointer' id='sameAsBilling' onChange={handleSameAsBilling}/>
                    <label htmlFor="sameAsBilling" className='cursor-pointer'>Same as Billing</label>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Name' 
                    onChange={(e)=>{handleChange("shipping","name",e.target.value)}} value={invoiceData.shipping.name}/>
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Phone'
                     onChange={(e)=>{handleChange("shipping","phone",e.target.value)}} value={invoiceData.shipping.phone} />
                </div>
                <div className="w-full md:col-span-2">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Shipping address' 
                     onChange={(e)=>{handleChange("shipping","address",e.target.value)}} value={invoiceData.shipping.address}/>
                </div>
            </div>
        </div>

        {/* Invoice info */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Invoice Information</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <label htmlFor="invoiceNumber">Invoice Number</label>
                    <input type="text" disabled id='invoiceNumber'
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none'
                    onChange={(e)=>{handleChange("invoice","number",e.target.value)}} value={invoiceData.invoice.number} />
                </div>
                <div className="w-full md:col-span-1">
                    <label htmlFor="invoiceDate">Invoice Date</label>
                    <input type="date" id='invoiceDate'
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Invoice Date' 
                     onChange={(e)=>{handleChange("invoice","date",e.target.value)}} value={invoiceData.invoice.date}/>
                </div>
                <div className="w-full md:col-span-1">
                    <label htmlFor="invoiceDueDate">Invoice Due Date</label>
                    <input type="date" id='invoiceDueDate'
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Due Date'
                     onChange={(e)=>{handleChange("invoice","dueDate",e.target.value)}} value={invoiceData.invoice.dueDate}/>
                </div>
            </div>
        </div>

        {/* Item details */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Item Details</h5>
            {invoiceData.items.map((item,idx)=>(
                <div key={idx} className='rounded border border-gray-300 p-4 mb-2'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                        <input type="text" placeholder='Item Name' className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'
                        onChange={(e)=>{handleItemChange(idx,"name", e.target.value)}} value={item.name}/>
                        <input type="number" placeholder='qty' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'
                        onChange={(e)=>{handleItemChange(idx,"qty", e.target.value)}} value={item.qty}/>
                        <input type="number" placeholder='Amount' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'
                        onChange={(e)=>{handleItemChange(idx,"amount", e.target.value)}} value={item.amount}/>
                        <input type="number" placeholder='Total' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'
                        disabled value={item.total}/>
                    </div>
                    <div className='mt-2 flex items-center gap-2'>
                        <textarea name="" placeholder='Description' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'
                        onChange={(e)=>{handleItemChange(idx,"description", e.target.value)}} value={item.description}></textarea>
                        
                        {invoiceData.items.length > 1 && ( 
                            <button onClick={()=>{delelteItem(idx)}} className='border cursor-pointer border-red-500  hover:bg-red-500 p-2.5 rounded text-red-400 hover:text-white '>
                                <Trash2 size={38} />
                            </button>
                        )}

                    </div>
                </div>
            ))}
            <button onClick={addItem} className='bg-blue-600 text-white border-2 cursor-pointer rounded-lg mt-3 p-2 '>Add Item</button>
        </div>

        {/* bank acount info  */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Bacnk Account Details</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Account Name'
                    onChange={(e)=>{handleChange("account","name",e.target.value)}} value={invoiceData.account.name} />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Account Number'
                     onChange={(e)=>{handleChange("account","number",e.target.value)}} value={invoiceData.account.number} />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Branch/IFSC Code'
                     onChange={(e)=>{handleChange("account","ifceCode",e.target.value)}} value={invoiceData.account.ifceCode} />
                </div>
            </div>
        </div>

        {/* totals */}
        <div className='mb-4'>
            <h5 className='text-lg font-bold'>Totals</h5>
            <div className="flex justify-end">
                <div className='w-1/2 md:w-full'>
                    <div className="flex justify-between">
                        <span>SubTotal</span>
                        <span>${subTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <label htmlFor="taxInput" className='me-2'>Tax Rate(%)</label>
                        <input type="number" id="taxInput" placeholder='2' className='rounded w-1/2 text-end p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none'
                        onChange={(e)=>{setInvoiceData((prev)=>({...prev,tax:e.target.value}))}} value={invoiceData.tax}/>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax Amount</span>
                        <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold mt-2">
                        <span>Grand Total</span>
                        <span>${grandTotal.toFixed(2)}</span>
                    </div>

                </div>
            </div> 
        </div>

        {/* Notes  */}
        <div className='mb-4'>
            <h5>Notes</h5>
            <div className='w-full'>
                <textarea name="notes" className='rounded w-full text-end p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none'  rows="2"
                 onChange={(e)=>{setInvoiceData((prev)=>({...prev,notes:e.target.value}))}} value={invoiceData.notes}></textarea>
            </div>
        </div>
    </div>
)}

export default InvoiceForm;
