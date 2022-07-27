import React from "react";
import Image from "next/image";

export const IconBlob = (props) => (
  <Image
    key={props.icon}
    style={{
      cursor: "pointer",
      transition: "transform 1000ms ease-in-out",
    }}
    onMouseOver={(event) => {
      const randomDirectionNumber = Math.random();
      const randomAxisNumber = Math.random();
      const direction = randomDirectionNumber > 0.5 ? 1 : -1;
      const axis =
        randomAxisNumber > 0.7
          ? `0,0,${direction}`
          : randomAxisNumber > 0.3
          ? `0,${direction},0`
          : `${direction},0,0`;
      event.target.style.transform = `rotate3d(${axis},360deg)`;
    }}
    onMouseOut={(event) => {
      event.target.style.transform = "rotate3d(0,0,1,0)";
    }}
    src={props.icon}
    height="75"
    width="75"
  />
);
