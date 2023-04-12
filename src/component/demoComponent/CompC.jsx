import React, { useContext } from "react";
import { themeContext } from "./demoUseContext";
export default function CompC() {
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <div className={theme}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        obcaecati eveniet reiciendis odio maxime nihil perspiciatis eius quam
        quibusdam cum repudiandae, omnis soluta velit, deleniti earum officiis
        est, architecto modi! Natus hic nobis eaque alias aliquam non id quo
        cupiditate accusamus omnis quidem quos rem, debitis suscipit laudantium.
        Tempore perferendis soluta voluptatum minima corrupti architecto sunt
        possimus dolorem nesciunt culpa!
      </p>
    </div>
  );
}
