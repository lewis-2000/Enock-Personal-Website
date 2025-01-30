import React from "react";

interface HeroProps {
  title: string;
  subTitle: string;
  name: string;
  heroBg: string | null; // Use null if no image is provided
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
  subTitle,
  name,
  heroBg,
  linkText,
  linkURL,
  backgroundAttachment,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
}) => {
  const backgroundStyle = heroBg
    ? {
        background: `url(${heroBg})`,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundAttachment: backgroundAttachment,
      }
    : {
        background: "linear-gradient(to bottom, black, green)",
      };

  return (
    <div
      className="flex h-screen w-screen justify-around items-center overflow-x-hidden"
      style={backgroundStyle}
    >
      {/* Hero Content */}
      <div className="text-white p-6">
        <p>{title}</p>
        <h1 className="text-4xl font-bold">
          I'm <span>{name}</span>
        </h1>
        <p className="text-xl text-gray-300">{subTitle}</p>
        <a
          href={linkURL}
          className="mt-8 inline-block text-white font-bold hover:text-yellow-500"
        >
          {linkText}
        </a>
      </div>

      {/* Hero Image */}
      <div
        className="relative rounded-full p-20 bg-green-950"
        style={{
          boxShadow: "0 0 25px 10px green",
        }}
      >
        <img
          src={heroBg || "/path/to/default-image.jpg"}
          alt="Hero"
          className="rounded-full w-48 h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default V2Hero;
