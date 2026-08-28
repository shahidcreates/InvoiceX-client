import React from "react";

const ProfessionalTemplate = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-gray-800">

      {/* Header */}
      <div className="p-6 md:p-10 border-b">

        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div className="flex gap-4">

            {data.companyLogo && (
              <img
                src={data.companyLogo}
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            )}

            <div>
              <h2 className="text-2xl font-bold">
                {data.companyName}
              </h2>

              <p className="text-sm text-gray-500">
                {data.companyAddress}
              </p>

              <p className="text-sm text-gray-500">
                {data.companyPhone}
              </p>
            </div>

          </div>

          <div className="md:text-right">

            <h1 className="text-3xl font-bold">
              {data.title || "INVOICE"}
            </h1>

            <p className="mt-2">
              <span className="font-semibold">
                Invoice:
              </span>{" "}
              #{data.invoiceNumber}
            </p>

            <p className="text-sm text-gray-500">
              Invoice Date: {data.invoiceDate}
            </p>

            <p className="text-sm text-gray-500">
              Due Date: {data.paymentDate}
            </p>

          </div>

        </div>

      </div>

      {/* Parties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 bg-gray-50">

        <div>

          <p className="text-xs uppercase font-semibold text-gray-400">
            Billed To
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

          <p className="text-xs uppercase font-semibold text-gray-400">
            Shipping To
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
      <div className="p-6 md:p-10 overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b">

              <th className="text-left py-3">
                Description
              </th>

              <th className="text-center">
                Qty
              </th>

              <th className="text-right">
                Rate
              </th>

              <th className="text-right">
                Amount
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

        {/* Summary */}
        <div className="flex justify-end mt-8">

          <div className="w-full md:w-72">

            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>
                {data.currencySymbol}{data.subTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span>Tax ({data.tax}%)</span>
              <span>
                {data.currencySymbol}{data.taxAmount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mt-3 p-4 bg-gray-100 text-lg font-bold">
              <span>Total Due</span>

              <span>
                {data.currencySymbol}{data.total.toFixed(2)}
              </span>
            </div>

          </div>

        </div>

        {/* Payment */}
        <div className="mt-10 pt-5 border-t">

          <h3 className="font-semibold">
            Payment Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 text-sm text-gray-500">

            <p>
              <b>Account:</b> {data.accountName}
            </p>

            <p>
              <b>A/C No:</b> {data.accountNumber}
            </p>

            <p>
              <b>IFSC:</b> {data.accountIfceCode}
            </p>

          </div>

        </div>

        {data.notes && (
          <div className="mt-6">

            <h3 className="font-semibold">
              Notes
            </h3>

            <p className="text-sm text-gray-500">
              {data.notes}
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default ProfessionalTemplate;