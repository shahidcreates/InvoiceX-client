import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl px-8 py-16 text-center text-white">

        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to Create Your First Invoice?
        </h2>

        <p className="mt-5 text-indigo-100 text-lg">
          Start creating professional invoices with InvoiceX today.
        </p>

        <Link
          to="/register"
          className="inline-block mt-8 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Get Started for Free
        </Link>

      </div>
    </section>
  );
};

export default CTA;