import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center relative">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            I hope you enjoy exploring my work as much as I enjoyed creating it.
          </p>

          {/* Text Effect */}
          <TextGenerateEffect
            words="CHARLES OWUSU ASARE"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-justify">
            A passionate web developer,graphic designer,software engineer, etc.
            With a knack for creating innovative solutions and bringing ideas to
            life. With 3 years of experience in the industry,I’ve honed my
            skills in front-end development,UX/UI design,software
            development,and I am constantly seeking new challenges that push my
            boundaries and fuel my creativity.
          </p>

          {/* Button */}
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Image container */}
      <div className="absolute top-4 right-4">
        <img
          src="/GGG-removebg-preview.png"
          alt="Description of the image"
          className="w-[150px] md:w-[200px] max-w-md rounded-lg mb-4"
        />
      </div>
    </div>
  );
};

export default Hero;
