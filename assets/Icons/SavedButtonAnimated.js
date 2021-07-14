import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import Animated from "react-native-reanimated";
import iconAnimation from "../../src/components/iconAnimation";

const SavedButton = () => {
  const [trigger, setTrigger] = useState(false);
  const { IconFilled, IconRegular } =
    iconAnimation(trigger);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setTrigger(!trigger)}
    >
      <Animated.View style={IconRegular}>
        <FontAwesome
          name="bookmark-o"
          size={30}
          color="white"
        />
      </Animated.View>
      <Animated.View style={[IconFilled, styles.absolute]}>
        <FontAwesome
          name="bookmark"
          size={30}
          color="white"
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
});

export default SavedButton;
