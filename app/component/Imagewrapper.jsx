import React from "react";
import Image from "next/image";

const ImagesWrapper = ({ width, height, src, alt, objectFit }) => {
  return (
    <>
      <div style={{ position: "relative", width: width, height: height }}>
        <Image fill objectFit={objectFit} src={src} alt={alt} />
      </div>
    </>
  );
};

export default ImagesWrapper;
