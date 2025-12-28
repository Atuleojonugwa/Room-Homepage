import React from "react";
import { useState, useEffect } from "react";
import hero1 from "../assets/desktop-image-hero-1.jpg";
import hero2 from "../assets/desktop-image-hero-2.jpg";
import hero3 from "../assets/desktop-image-hero-3.jpg";
import logo from "../assets/logo.svg";

const SliderButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-black w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-(--grey-800) transition-colors focus:outline-none"
  >
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

const Slides = [
  {
    id: 1,
    Image: hero1,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    Image: hero2,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    Image: hero3,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenMenu(false); // Close mobile menu automatically on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);





  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Slides.length - 1 : prev - 1));
  };

  const activeSlide = Slides[currentSlide];
  return (
    <div className="flex flex-col md:flex-row w-full md:h-150 sm:min-h-screen">
      <div className="relative w-full md:w-[58%] h-[50vh] md:h-auto">

        <img src={activeSlide.Image} alt="hero-Image" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 flex items-center  w-full pt-14 p-6 md:p-12 gap-12">
          {/* Mobile menu icon */}
          <button className="md:hidden text-white text-3xl" onClick={() => setOpenMenu(true)}>
            ☰
          </button>

          <img src={logo} alt="Room logo" className="mx-auto md:mx-0" />
          <nav className="hidden md:flex gap-8">
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
        {/* -------- Mobile Menu Overlay -------- */}
        {openMenu && (
          <div className="absolute top-0 left-0 w-full bg-white p-6 flex justify-between items-center z-50 shadow-lg">
            <button onClick={() => setOpenMenu(false)} className="text-2xl">✕</button>
            <nav className="flex gap-6 font-semibold">
              {["home", "shop", "about", "contact"].map(i => (
                <a key={i} className="uppercase">{i}</a>
              ))}
            </nav>
          </div>
        )}
      </div>

      <div className="w-full md:w-[42%] flex flex-col justify-center p-10 md:px-20 gap-5">

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {activeSlide.title}
        </h1>
        <p className="text-(--grey-500) text-[12px] leading-4 font-medium mb-5">
          {activeSlide.text}
        </p>


        <button className="flex items-center gap-6 text-black uppercase tracking-[0.8em] text-sm font-bold hover:text-(--grey-500) cursor-pointer transition-colors duration-300">
          Shop Now
          <span>
            <Iconarrow />
          </span>
        </button>

        <div className="flex absolute bottom-0 left-0">
          <SliderButton onClick={prevSlide}>
            <Angleleft />
          </SliderButton>

          <SliderButton onClick={nextSlide}>
            <Angleright />
          </SliderButton>
        </div>
      </div>
    </div>
  );
}

export default Homepage;


