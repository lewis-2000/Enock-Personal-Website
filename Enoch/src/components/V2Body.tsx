import React from "react";
import MiniGalery from "./subcomponents/MiniGalery";
import About from "./subcomponents/About";

interface BodyProps {
  Galery1Url: string;
  Galery2Url: string;
  Galery3Url: string;
  Galery4Url: string;
  HeaderBgUrl: string;
  AboutDetails: string;
  AboutTitle: string;
  AboutSubtitle: string;
  aboutImages: string[];
}

const V2Body: React.FC<BodyProps> = ({
  Galery1Url,
  Galery2Url,
  Galery3Url,
  Galery4Url,
  // HeaderBgUrl,
  AboutDetails,
  AboutTitle,
  AboutSubtitle,
  aboutImages,
}) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <MiniGalery
        Gallery1Src={Galery1Url}
        Gallery2Src={Galery2Url}
        Gallery3Src={Galery3Url}
        Gallery4Src={Galery4Url}
      />

      <About
        AboutDetails={AboutDetails}
        HeaderBgUrls={aboutImages}
        AboutSubtitle={AboutSubtitle}
        AboutTitle={AboutTitle}
      />
    </div>
  );
};

export default V2Body;
