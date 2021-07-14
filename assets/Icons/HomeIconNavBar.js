import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIconNavBar = ({ focused }) => {
  return (
    <>
      {focused ? (
        <Svg
          width={30}
          height={30}
          viewBox="0 0 500 500"
          fill="white"
          fillRule="evenodd"
        >
          <Path
            class="cls-1"
            d="M61.414,431.141V250L250,70.72,440.447,250V431.141S440.154,450.993,422,450.993H318s-17.752-1.241-17.752-19.852V326.3S299.007,288.159,250,288s-49.007,38.3-49.007,38.3V431.141S200.228,450.993,182,450.993H79S61.414,451.613,61.414,431.141Z"
          />
        </Svg>
      ) : (
        <Svg
          width={30}
          height={30}
          viewBox="0 0 500 500"
          fill="transparent"
          stroke="white"
          strokeWidth={45}
          fillRule="evenodd"
        >
          <Path d="M61.414,431.141V250L250,70.72,440.447,250V431.141S440.154,450.993,422,450.993H318s-17.752-1.241-17.752-19.852V326.3S299.007,288.159,250,288s-49.007,38.3-49.007,38.3V431.141S200.228,450.993,182,450.993H79S61.414,451.613,61.414,431.141Z" />
        </Svg>
      )}
    </>
  );
};

export default HomeIconNavBar;
