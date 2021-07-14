import React from "react";
import { View, StyleSheet } from "react-native";
import {
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
import Circle from "./Circle";

const CarrouselIndicatorAnimated = ({
  quantity,
  activeImage,
}) => {
  const indicators = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const animation = useDerivedValue(() => {
    return withTiming(activeImage.value);
  });

  return (
    <View style={styles.container}>
      {indicators.slice(0, quantity).map((_, index) => {
        return (
          <Circle
            key={String(index)}
            {...{ animation, index, activeImage }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default CarrouselIndicatorAnimated;
