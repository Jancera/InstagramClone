import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Reels = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        Ainda não fui desenvolvida ;-;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Reels;
