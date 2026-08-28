import React from "react";

const ClassicTemplate = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-10 text-gray-800">

      {/* Header */}
      <div className="border-2 border-gray-800">

        <div className="p-5 flex flex-col md:flex-row justify-between gap-5">

          <div className="flex gap-4">

            {data.companyLogo && (
              <img
                src={data.companyLogo}
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            )}

            <div>
              <h2 className="text-xl font-bold">
                {data.companyName}
              </h2>

              <p className="text-sm">
                {data.companyAddress}
              </p>

              <p className="text-sm">
                {data.companyPhone}
              </p>
            </div>

          </div>

          <div className="md:text-right">
            <h1 className="text-3xl font-bold uppercase">
              {data.title || "Invoice"}
            </h1>

            <p className="text-sm mt-2">
              Invoice #: {data.invoiceNumber}
            </p>

            <p className="text-sm">
              Date: {data.invoiceDate}
            </p>

            <p className="text-sm">
              Due: {data.paymentDate}
            </p>
          </div>

        </div>

      </div>

      {/* Billing */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-x-2 border-gray-800">

        <div className="p-5 border-b md:border-b-0 md:border-r-2 border-gray-800">

          <h3 className="font-bold mb-2">
            BILL TO
          </h3>

          <p>{data.billingName}</p>
          <p className="text-sm">{data.billingAddress}</p>
          <p className="text-sm">{data.billingPhone}</p>

        </div>

        <div className="p-5 border-b-2 md:border-b-0 border-gray-800">

          <h3 className="font-bold mb-2">
            SHIP TO
          </h3>

          <p>{data.shippingName}</p>
          <p className="text-sm">{data.shippingAddress}</p>
          <p className="text-sm">{data.shippingPhone}</p>

        </div>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse border-2 border-gray-800">

          <thead>
            <tr>
              <th className="border border-gray-800 p-3 text-left">
                Description
              </th>

              <th className="border border-gray-800 p-3">
                Qty
              </th>

              <th className="border border-gray-800 p-3">
                Rate
              </th>

              <th className="border border-gray-800 p-3">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>

            {data.items?.map((item, index) => (
              <tr key={index}>

                <td className="border border-gray-800 p-3">
                  {item.description}
                </td>

                <td className="border border-gray-800 p-3 text-center">
                  {item.qty}
                </td>

                <td className="border border-gray-800 p-3 text-right">
                  {data.currencySymbol}
                  {item.amount}
                </td>

                <td className="border border-gray-800 p-3 text-right">
                  {data.currencySymbol}
                  {(item.qty * item.amount).toFixed(2)}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Total */}
      <div className="flex justify-end">

        <div className="w-full md:w-80 border-x-2 border-b-2 border-gray-800">

          <div className="flex justify-between p-3 border-b">
            <b>Subtotal</b>
            <span>
              {data.currencySymbol}{data.subTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between p-3 border-b">
            <b>Tax ({data.tax}%)</b>
            <span>
              {data.currencySymbol}{data.taxAmount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between p-4 text-lg font-bold">
            <span>Total</span>
            <span>
              {data.currencySymbol}{data.total.toFixed(2)}
            </span>
          </div>

        </div>

      </div>

      {/* Account */}
      <div className="mt-8">
        <h3 className="font-bold">Payment Information</h3>

        <p className="text-sm">
          {data.accountName} | {data.accountNumber}
        </p>

        <p className="text-sm">
          IFSC: {data.accountIfceCode}
        </p>
      </div>

      {data.notes && (
        <div className="mt-5">
          <b>Notes:</b>
          <p className="text-sm">{data.notes}</p>
        </div>
      )}

    </div>
  );
};

export default ClassicTemplate;