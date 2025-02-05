import React from "react";
import { GiStarFormation } from "react-icons/gi";

interface HeroProps {
  title: string;
  profession: string;
  name: string;
  heroButtonText: string;
  heroBg: string | null;
  selfBg: string | null; // Use null if no image is provided for self-portrait section. If heroBg is provided, selfBg will be ignored.
  callToAction: string;
  linkText: string;
  linkURL: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundAttachment: string;
}

const V2Hero: React.FC<HeroProps> = ({
  title,
  profession,
  name,
  heroBg,
  selfBg,
  // linkText,
  heroButtonText,
  linkURL,
  backgroundAttachment,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row h-screen w-screen justify-between items-center px-10 md:px-20 bg-black text-white"
      style={{
        backgroundImage: heroBg ? `url(${heroBg})` : "none",
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundAttachment: backgroundAttachment,
      }}
    >
      {/* Hero Text Content */}
      <div className="max-w-xl space-y-4 text-start z-30">
        <p className="text-yellow-500 text-lg">{title}</p>
        <h1 className="text-5xl font-bold">
          I'm <span className="text-white">{name}</span>
        </h1>
        <p className="text-3xl font-semibold text-green-400 flex items-center">
          <GiStarFormation className="mr-2" /> {profession}
        </p>
        <p className="text-gray-300">
          A blend of creativity, empathy, and technical expertise. I strive to
          design interfaces that not only look good but engage users at every
          interaction.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4 mt-6">
          <a
            href={linkURL}
            className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow-lg hover:bg-green-400"
          >
            {heroButtonText}
          </a>
          <button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-black">
            🎥 Intro Video
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-full w-80 h-80 blur-md"></div>
        <img
          src={selfBg || "/path/to/default-image.jpg"}
          alt="Hero"
          className="rounded-full w-80 h-80 object-cover border-noneshadow-lg z-10"
          style={{ position: "relative", top: "-10px" }}
        />
      </div>
    </div>
  );
};

export default V2Hero;
