const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Invoice<span className="text-indigo-500">X</span>
            </h2>

            <p className="mt-4 max-w-sm">
              Simple and professional invoice management for
              modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a href="#features" className="block hover:text-white">
                Features
              </a>

              <a href="#how-it-works" className="block hover:text-white">
                How It Works
              </a>

              <a href="#why-invoicex" className="block hover:text-white">
                Why InvoiceX
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Contact
            </h3>

            <p className="mt-4">
              support@invoicex.com
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © 2026 InvoiceX. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;