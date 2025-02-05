import React from "react";

interface GalleryProps {
  Gallery1Src: string;
  Gallery2Src: string;
  Gallery3Src: string;
  Gallery4Src: string;
}

const MiniGalery: React.FC<GalleryProps> = ({
  Gallery1Src,
  Gallery2Src,
  Gallery3Src,
  Gallery4Src,
}) => {
  return (
    <div className="w-full p-4 h-auto flex flex-wrap justify-around">
      <div className="h-64 md:w-1/5 w-full overflow-hidden border-2 border-white">
        <img
          src={Gallery1Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="h-64 md:w-1/5 w-full mb-2 overflow-hidden border-2 border-white">
        <img
          src={Gallery2Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="h-64 md:w-1/5 w-full mb-2 overflow-hidden border-2 border-white">
        <img
          src={Gallery3Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="h-64 md:w-1/5 w-full mb-2 overflow-hidden border-2 border-white">
        <img
          src={Gallery4Src}
          alt="Gallery Image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default MiniGalery;
