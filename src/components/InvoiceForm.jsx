import React from 'react'
import { assets } from '../assets/assets'
import { FileUp, Trash, Trash2, TrashIcon } from 'lucide-react'

const InvoiceForm = () => (
    <div className='py-4'>
        {/* company logo */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Compary Logo</h5>
            <div className="flex items-center gap-3">
                <label htmlFor='image'>
                    {/* <img src={assets.upload_area} alt="upload" width={48} /> */}
                    <FileUp size={48} />
                </label>
                <input type="file" name='logo' id='image' hidden accept='image/*' />
            </div>
        </div>

        {/* Company Info */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Your Company</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Company name' />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Company phone' />
                </div>
                <div className="w-full md:col-span-2">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Company address' />
                </div>
            </div>
        </div>

        {/* Bill to */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Bill To</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Name' />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Phone' />
                </div>
                <div className="w-full md:col-span-2">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Address' />
                </div>
            </div>
        </div>

        {/* ship to */}
        <div className='mb-4'>
            <div className='flex justify-between items-center'>
                <h5 className='text-lg font-medium'>Ship To</h5>
                <div className='flex items-center gap-1 '>
                    <input type='checkbox' className='w-[15px] h-[15px] cursor-pointer' id='sameAsBilling'/>
                    <label htmlFor="sameAsBilling" className='cursor-pointer'>Same as Billing</label>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Name' />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Phone' />
                </div>
                <div className="w-full md:col-span-2">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Shipping address' />
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
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Invoice Number' />
                </div>
                <div className="w-full md:col-span-1">
                    <label htmlFor="invoiceDate">Invoice Date</label>
                    <input type="date" id='invoiceDate'
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Invoice Date' />
                </div>
                <div className="w-full md:col-span-1">
                    <label htmlFor="invoiceDueDate">Invoice Due Date</label>
                    <input type="date" id='invoiceDueDate'
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Address' />
                </div>
            </div>
        </div>

        {/* Item details */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Item Details</h5>
            <div className='rounded border border-gray-300 p-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    <input type="text" placeholder='Item Name' className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'/>
                    <input type="number" placeholder='qty' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'/>
                    <input type="number" placeholder='Amount' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'/>
                    <input type="number" placeholder='Total' className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'/>
                </div>
                <div className='mt-2 flex items-center gap-2'>
                    <textarea name="" placeholder='Description' id="" className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500  focus:outline-none'></textarea>
                  
                    <button className='border cursor-pointer border-red-500 p-2.5 rounded'><Trash2 className='text-red-400  ' size={38} /></button>
                </div>
            </div>
            <button className='bg-blue-600 text-white border-2 cursor-pointer rounded-lg mt-3 p-2 '>Add Item</button>
        </div>

        {/* bank acount info  */}
        <div className='mb-4'>
            <h5 className='text-lg font-medium'>Bacnk Account Details</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 mt-1">
                <div className="w-full  md:col-span-1">
                    <input type="text" 
                    className='rounded w-full  p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Account Name' />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Account Number' />
                </div>
                <div className="w-full md:col-span-1">
                    <input type="text" 
                     className='rounded  w-full p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' placeholder='Branch/IFSC Code' />
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
                        <span>${1000.00}</span>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <label htmlFor="taxInput" className='me-2'>Tax Rate(%)</label>
                        <input type="number" id="taxInput" placeholder='2' className='rounded w-1/2 text-end p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none' />
                    </div>
                    <div className="flex justify-between">
                        <span>Tax Amount</span>
                        <span>${1000.00}</span>
                    </div>
                    <div className="flex justify-between font-bold mt-2">
                        <span>Grand Total</span>
                        <span>${1000.00}</span>
                    </div>

                </div>
            </div>
        </div>

        {/* Notes  */}
        <div className='mb-4'>
            <h5>Notes</h5>
            <div className='w-full'>
                <textarea name="notes" className='rounded w-full text-end p-2.5 border border-gray-300 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 focus:outline-none'  rows="2"></textarea>
            </div>
        </div>
    </div>
)

export default InvoiceForm
