import React from 'react'
import './Template1.css'

const Template1 = ({data}) => {
  return (
    <div className='template1 border rounded mx-auto my-4 w-full max-w-[800px] px-3 sm:px-4 md:px-6 py-3 bg-white'>
      {/* header section  */}
      <div className='flex flex-col md:flex-row gap-4 mb-4 '>
        <div className='w-full md:w-1/2'>
            {data.companyLogo && (
                <div className='mb-2'>
                    <img src={data.companyLogo} alt="Company Logo" width={98} />
                </div>
            )}
            <h2 className='mb-1 company-title'>{data.companyName}</h2>
            <p className='mb-1 break-words'>{data.companyAddress}</p>
            <p className='mb-0 break-words'>Phone: {data.companyPhone}</p>
        </div>

        <div className='w-full md:w-1/2 text-left md:text-right'>
            <h1 className='mb-4 invoice-title'>Invoice</h1>
            <div className='flex flex-col gap-1'>
                <div className='w-full md:w-1/2 mb-3 md:mb-0 md:ml-auto'>
                    <p className='mb-1'><strong>Invoice#:</strong>{data.invoiceNumber}</p>
                    <p className='mb-1'><strong>Invoice Date:</strong>{data.invoiceDate}</p>
                    <p className='mb-1'><strong>Due Date:</strong>{data.paymentDate}</p>
                </div>
            </div>
        </div>
      </div>

      <hr className='my-4 orange-border'/>
      {/* billing section  */}
      <div className='flex flex-col md:flex-row gap-3 mb-6'>
        {data.shippingName && data.shippingPhone && data.shippingAddress && (
          <div className='w-full md:w-1/2'>
            <div className='rounded p-3 h-full billing-box'>
              <h3 className='mb-2 billing-title'>Shipped To</h3>
              <p className='mb-1'><strong>{data.shippingName}</strong></p>
              <p className='mb-1 break-words'>{data.shippingAddress}</p>
              <p className='mb-0'>Phone: {data.shippingPhone}</p>
            </div>
          </div>
        )}
        <div className={`w-full ${data.shippingName && data.shippingPhone && data.shippingAddress? 'md:w-1/2': 'md:w-full'}`}>
          <div className='rounded p-3 h-full billing-box'>
              <h3 className='mb-2 billing-title'>Billed To</h3>
              <p className='mb-1'><strong>{data.billingName}</strong></p>
              <p className='mb-1  break-words'>{data.billingAddress}</p>
              <p className='mb-0'>Phone: {data.billingPhone}</p>
            </div>
        </div>
      </div>

      {/* Items section  */}
      <div className='mb-6 '>
        <div className='w-full overflow-x-auto'>
          <table className='border w-full invoice-table'>
            <thead>
              <tr>
                <th className='p-2 border table-header text-left '>Item #/Item description</th>
                <th className='p-2 border table-header text-center'>Qty.</th>
                <th className='p-2 border table-header text-right'>Rate</th>
                <th className='p-2 border table-header text-right'>Amount</th>
              </tr>
            </thead>
            <tbody >
              {data.items.map((item,idx) =>(
                <tr key={idx} className='border'>
                  <td className='p-2 border break-words'>{item.name}</td>
                  <td className='p-2 border text-center'>{item.qty}</td>
                  <td className='p-2 border text-right whitespace-nowrap'>₹{Number(item.amount)?.toFixed(2)}</td>
                  <td className='p-2 border text-right whitespace-nowrap'>₹{(Number(item.qty) * Number(item.amount)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Total section  */}
      <div className='mb-6'>
        <div className='flex justify-end'>
          <div className='totals-box p-3 w-full sm:max-w-[300px] rounded' style={{maxWidth:"300px"}}>
            <div className='flex justify-between  gap-4 mb-2'>
              <span>Sub Total: </span>
              <span className="whitespace-nowrap">₹{data.subTotal} </span>
            </div>
            {data.tax > 0 && (
              <div className='flex justify-between gap-4 mb-2'>
                <span>Tax ({data.tax}%): </span>
                <span className="whitespace-nowrap">₹{data.taxAmount} </span>
              </div>
            )}
            <div className='flex justify-between font-bold total-highlight'>
                <span>Total: </span>
                <span className="whitespace-nowrap" >₹{data.total} </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bank account section  */}
      {(data.accountName || data.accountNumber || data.accountIfseCode) &&(
        <div className='mt-6'>
          <h3 className='mb-2 billing-title'>Bank Account Details</h3>
          {data.accountName && (
            <p className='mb-1  break-words'>
              <strong>Account Holder: </strong>{data.accountName}
            </p>
          )}
          {data.accountNumber && (
            <p className='mb-1  break-words'>
              <strong>Account Number: </strong>{data.accountNumber}
            </p>
          )}
          {data.accountIfceCode && (
            <p className='mb-0  break-words'>
              <strong>Ifce/Branch Code: </strong>{data.accountIfseCode}
            </p>
          )}
        </div>
      )}

      {/* NOtes section  */}
      {data.notes && (
        <div className='mt-6'>
          <h3 className='billing-title mb-2'>Remarks</h3>
          <p className='mb-0  break-words'>{data.notes}</p>
        </div>
      )}
    </div>
  )
}

export default Template1
