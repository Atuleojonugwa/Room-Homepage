import React from "react";
import hero1 from "../assets/desktop-image-hero-1.jpg";
import logo from "../assets/logo.svg";

const SliderButton = ({ children }) => (
  <button className="bg-black w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-(--grey-800) transition-colors focus:outline-none">
    {children}
  </button>
);

const Iconarrow = () => (
  <svg
    width="40"
    height="12"
    className="fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
      fill="currentColor"
      fill-rule="nonzero"
    />
  </svg>
);

const Angleright = () => (
  <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd" />
  </svg>
);

const Angleleft = () => (
  <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd" />
  </svg>
);

function Homepage() {
  return (
    <div className="flex w-full">
      <div
        className="w-[66%] h-120 bg-cover bg-center px-7 py-6"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="flex items-center gap-12 p-8">
          <img src={logo} alt="Room logo" className="" />
          <nav className="flex items-center gap-7">
            {["home", "shop", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white text-sm font-semibold lowercase
                    relative 
                    after:content-[''] 
                    after:absolute 
                    after:left-0 
                    after:-bottom-1.5 
                    after:w-full 
                    after:h-0.5 
                    after:bg-white 
                    after:scale-x-0 
                    after:origin-center 
                    after:transition-transform 
                    after:duration-300 
                    hover:after:scale-x-100
                "
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="w-[42%] flex relative flex-col justify-center px-20 ">
        <div className="max-w-md">
          <h1 className="leading-10 tracking-tight font-bold text-4xl  mb-6">
            Discover innovative ways to decorate
          </h1>
          <p className="text-(--grey-500) text-[12px] leading-4 font-medium mb-5">
            We provide unmatched quality, comfort, and style for property <br />{" "}
            owners across the country. Our experts combine form and <br />{" "}
            function in bringing your vision to life. Create a room in your{" "}
            <br /> own style with our collection and make your property a <br />{" "}
            reflection of you and what you love.
          </p>
        </div>

        <button className="flex items-center gap-6 text-black uppercase tracking-[0.8em] text-sm font-bold hover:text-(--grey-500) cursor-pointer transition-colors duration-300">
          Shop Now
          <span className="">
            <Iconarrow />
          </span>
        </button>

        <div className="flex absolute bottom-0 left-0">
          <SliderButton>
            <Angleleft />
          </SliderButton>

          <SliderButton>
            <Angleright />
          </SliderButton>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
