import React from "react";
import Svg, {
  LinearGradient,
  Stop,
  Circle,
  Defs,
} from "react-native-svg";

const StoryBorderGradient = ({ width, height, stroke }) => {
  return (
    <Svg
      width={width}
      height={height}
      strokeWidth={stroke}
      stroke="white"
      viewBox="0 0 200 200"
    >
      <Defs>
        <LinearGradient
          id="grad"
          x1="0"
          y1="1"
          x2="1"
          y2="0"
        >
          <Stop
            offset="0"
            stopColor="#feda75"
            stopOpacity="1"
          />
          <Stop
            offset="0.4"
            stopColor="#fa7e1e"
            stopOpacity="1"
          />
          <Stop
            offset="1"
            stopColor="#d62976"
            stopOpacity="1"
          />
        </LinearGradient>
      </Defs>

      <Circle
        stroke="url(#grad)"
        cx="100"
        cy="100"
        r="90"
      />
    </Svg>
  );
};

export default StoryBorderGradient;
