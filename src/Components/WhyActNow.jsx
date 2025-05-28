import { Button } from './ui/button';

const WhyActNow = () => {
  return (
    <div id="why-act-now" className="bg-[#B8D5C7] py-16 my-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why should people act now?
        </h2>
        <p className="text-gray-700 mb-8">
          Some reasons why and shouldn't think too much why they need it. Use
          with strong CTA encouraging immediate action.
        </p>
        <Button className="bg-[#035718] text-white hover:bg-[#459843] shadow-sm transition-transform hover:scale-105 duration-300">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default WhyActNow;
