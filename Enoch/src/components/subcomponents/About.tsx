import React from "react";

interface AboutProps {
  HeaderBgUrl: string;
  AboutDetails: string;
}

const About: React.FC<AboutProps> = ({ HeaderBgUrl, AboutDetails }) => {
  return (
    <div className="h-screen w-screen">
      <div className="h-2/5 w-full overflow-hidden">
        <img src={HeaderBgUrl} alt="Header Url" />
      </div>
      <div>
        <h1>About Me</h1>
        <div className="md:px-[calc(0.25*100%)] px-4">
          <p>{AboutDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
