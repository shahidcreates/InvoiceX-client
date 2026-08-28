import React from "react";

const MinimalTemplate = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-12 text-gray-700">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between">

        <div className="flex gap-4">

          {data.companyLogo && (
            <img
              src={data.companyLogo}
              alt="Logo"
              className="w-14 h-14 object-contain"
            />
          )}

          <div>
            <h2 className="text-xl font-semibold">
              {data.companyName}
            </h2>

            <p className="text-sm text-gray-400">
              {data.companyAddress}
            </p>

            <p className="text-sm text-gray-400">
              {data.companyPhone}
            </p>
          </div>

        </div>

        <div className="mt-6 md:mt-0 md:text-right">

          <h1 className="text-5xl font-light tracking-wider">
            {data.title || "Invoice"}
          </h1>

          <p className="text-sm mt-3">
            #{data.invoiceNumber}
          </p>

          <p className="text-sm text-gray-400">
            {data.invoiceDate}
          </p>

        </div>

      </div>

      {/* Customer */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Bill To
          </p>

          <h3 className="font-semibold mt-2">
            {data.billingName}
          </h3>

          <p className="text-sm text-gray-500">
            {data.billingAddress}
          </p>

          <p className="text-sm text-gray-500">
            {data.billingPhone}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Ship To
          </p>

          <h3 className="font-semibold mt-2">
            {data.shippingName}
          </h3>

          <p className="text-sm text-gray-500">
            {data.shippingAddress}
          </p>

          <p className="text-sm text-gray-500">
            {data.shippingPhone}
          </p>
        </div>

      </div>

      {/* Items */}
      <div className="mt-10 overflow-x-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b">

              <th className="text-left py-4">
                Item
              </th>

              <th className="text-center">
                Qty
              </th>

              <th className="text-right">
                Price
              </th>

              <th className="text-right">
                Total
              </th>

            </tr>
          </thead>

          <tbody>

            {data.items?.map((item, index) => (
              <tr key={index} className="border-b">

                <td className="py-4">
                  {item.description}
                </td>

                <td className="text-center">
                  {item.qty}
                </td>

                <td className="text-right">
                  {data.currencySymbol}{item.amount}
                </td>

                <td className="text-right">
                  {data.currencySymbol}
                  {(item.qty * item.amount).toFixed(2)}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Summary */}
      <div className="flex justify-end mt-8">

        <div className="w-full md:w-64">

          <div className="flex justify-between py-2">
            <span>Subtotal</span>
            <span>
              {data.currencySymbol}{data.subTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span>Tax</span>
            <span>
              {data.currencySymbol}{data.taxAmount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between py-4 border-t text-xl font-semibold">
            <span>Total</span>
            <span>
              {data.currencySymbol}{data.total.toFixed(2)}
            </span>
          </div>

        </div>

      </div>

      {/* Notes */}
      {data.notes && (
        <p className="mt-12 text-sm text-gray-400">
          {data.notes}
        </p>
      )}

    </div>
  );
};

export default MinimalTemplate;