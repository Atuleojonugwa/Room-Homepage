import React from "react";
import dark from "../assets/image-about-dark.jpg";
import light from "../assets/image-about-light.jpg";

function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full ">
        <div className="md:w-[30%] w-full">
          <img
            src={dark}
            alt="dark furniture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-[40%] w-full flex flex-col justify-center p-8 md:p-12 2xl:text-center">
          {/* <div className="max-w-md mx-auto"> */}
            <h2 className="text-black font-bold uppercase tracking-[0.4em] mb-4 text-sm 2xl:text-center 2xl:text-2xl">
              about our furniture
            </h2>

            <p className="text-gray-500 text-[12px] leading-5 font-medium 2xl:text-lg 2xl:leading-8">
              Our multifunctional collection blends design and function to suit
              your <br /> individual taste. Make each room unique, or pick a
              cohesive theme that best <br /> express your interests and what
              inspires you. Find the furniture pieces you <br /> need, from
              traditional to contemporary styles or anything in between. <br />{" "}
              Product specialists are available to help you create your dream
              space.
            </p>
          {/* </div> */}
        </div>

        <div className="md:w-[30%] w-full">
          <img
            src={light}
            alt="Light furniture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default About;
