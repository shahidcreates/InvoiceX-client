const features = [
  {
    icon: "⚡",
    title: "Create Invoices Quickly",
    description:
      "Generate professional invoices in just a few clicks without complicated steps.",
  },
  {
    icon: "📄",
    title: "Professional Templates",
    description:
      "Use clean and professional invoice templates for your business.",
  },
  {
    icon: "⬇️",
    title: "Download PDF",
    description:
      "Download your invoices as PDF files and share them with your clients.",
  },
  {
    icon: "🔗",
    title: "Share Invoice",
    description:
      "Share invoices easily using a secure and simple link.",
  },
  {
    icon: "📊",
    title: "Manage Invoices",
    description:
      "Keep your invoices organized and manage them from one dashboard.",
  },
  {
    icon: "🔒",
    title: "Secure",
    description:
      "Your invoice and account information is protected with secure authentication.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-indigo-600 font-semibold">
            FEATURES
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Everything You Need to Manage Invoices
          </h2>

          <p className="mt-4 text-gray-600">
            InvoiceX provides simple tools to create and manage
            professional invoices efficiently.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-7 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;