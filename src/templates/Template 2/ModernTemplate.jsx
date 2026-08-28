import React from "react";

const ModernTemplate = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-10 text-gray-800">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-6 border-b pb-6">

        <div className="flex gap-4">
          {data.companyLogo && (
            <img
              src={data.companyLogo}
              alt="Company Logo"
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
          <h1 className="text-4xl font-bold">
            {data.title || "Invoice"}
          </h1>

          <p className="text-sm mt-2">
            <strong>Invoice #:</strong> {data.invoiceNumber}
          </p>

          <p className="text-sm">
            <strong>Date:</strong> {data.invoiceDate}
          </p>

          <p className="text-sm">
            <strong>Due Date:</strong> {data.paymentDate}
          </p>
        </div>

      </div>

      {/* Billing / Shipping */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-7">

        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Bill To
          </p>

          <h3 className="font-semibold mt-2">
            {data.billingName}
          </h3>

          <p className="text-sm text-gray-600">
            {data.billingAddress}
          </p>

          <p className="text-sm text-gray-600">
            {data.billingPhone}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Ship To
          </p>

          <h3 className="font-semibold mt-2">
            {data.shippingName}
          </h3>

          <p className="text-sm text-gray-600">
            {data.shippingAddress}
          </p>

          <p className="text-sm text-gray-600">
            {data.shippingPhone}
          </p>
        </div>

      </div>

      {/* Items */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="border-b-2">
              <th className="text-left py-3">Description</th>
              <th className="text-center py-3">Qty</th>
              <th className="text-right py-3">Amount</th>
              <th className="text-right py-3">Total</th>
            </tr>
          </thead>

          <tbody>
            {data.items?.map((item, index) => (
              <tr key={index} className="border-b">

                <td className="py-3">
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

        <div className="w-full md:w-72 space-y-3">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              {data.currencySymbol}
              {data.subTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tax ({data.tax}%)</span>
            <span>
              {data.currencySymbol}
              {data.taxAmount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between border-t pt-3 text-xl font-bold">
            <span>Total</span>
            <span>
              {data.currencySymbol}
              {data.total.toFixed(2)}
            </span>
          </div>

        </div>

      </div>

      {/* Account */}
      <div className="mt-10 border-t pt-5">
        <h3 className="font-semibold">Payment Information</h3>

        <p className="text-sm">
          Account Name: {data.accountName}
        </p>

        <p className="text-sm">
          Account Number: {data.accountNumber}
        </p>

        <p className="text-sm">
          IFSC Code: {data.accountIfceCode}
        </p>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="mt-6">
          <h3 className="font-semibold">Notes</h3>

          <p className="text-sm text-gray-500 mt-1">
            {data.notes}
          </p>
        </div>
      )}

    </div>
  );
};

export default ModernTemplate;