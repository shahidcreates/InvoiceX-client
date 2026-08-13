import StepsCard from "./StepsCard";

const steps = [
  {
    number: "01",
    title: "Create Invoice",
    bg:"#dbeafe",
    color:"#2563eb",
    description: "Enter customer, product and payment details.",
  },
  {
    number: "02",
    title: "Choose Template",
    bg:"#dcfce7",
    color:"#16a34a",
    description: "Pick template that matches your brand and style.",
  },
  {
    number: "03",
    title: "Preview Invoice",
    bg:"#fef3c7",
    color:"#d97706",
    description: "See exactly how your invoice will look before sending it.",
  },
  {
    number: "04",
    title: "Download or Share",
    bg:"#fee2e2",
    color:"#dc2626",
    description: "Download your invoice as PDF or share it with your client.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-50 "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-indigo-600 font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Create Your Invoice in 4 Simple Steps
          </h2>
        </div>

        <div className="mt-14 grid text-center md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StepsCard step={step} key={step.number}/>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;