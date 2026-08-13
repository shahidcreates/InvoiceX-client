const WhyInvoiceX = () => {
  return (
    <section id="why-invoicex" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <p className="text-indigo-600 font-semibold">
            WHY INVOICEX?
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Invoice Management Made Simple
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Stop spending unnecessary time creating invoices manually.
            InvoiceX gives you a simple platform to create, manage,
            download and share invoices.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Simple and clean interface",
              "Fast invoice generation",
              "Professional PDF invoices",
              "Easy invoice sharing",
              "Secure authentication",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full">
                  ✓
                </span>

                <span className="text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 rounded-3xl p-10 text-white">
          <div className="text-6xl font-bold">
            InvoiceX
          </div>

          <p className="mt-6 text-indigo-100 text-lg">
            Your simple solution for professional invoice management.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyInvoiceX;