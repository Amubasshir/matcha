import React from "react";

const MoreMatcha = () => {
  return (
    <div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-3xl opacity-70"></div>
          {/* <img
            src="/lovable-uploads/5c1f8ebc-1d08-4c5a-ab62-8f415d5a8fac.png"
            alt="Matcha Tea Splash"
            className="relative z-10 max-w-full pulse-animation"
          /> */}
        </div>
      </div>
      {/* Curved wave divider */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default MoreMatcha;
