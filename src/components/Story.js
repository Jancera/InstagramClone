import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from "react-native";
import StoryBorderGradient from "./StoryBorderGradient";

const Story = ({ data }) => {
  const [stories, setStories] = useState(data);

  const _loadData = () => {
    setTimeout(
      () => setStories([...stories, ...data]),
      2000
    );
  };

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.align}>
        <View style={styles.iconStoryContainer}>
          <StoryBorderGradient
            width={85}
            height={85}
            stroke={6}
          />
          <Image
            source={item.profile_image}
            style={styles.image}
          />
        </View>
        <Text style={styles.white}>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={stories}
      keyExtractor={(story) => String(story.id)}
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={10}
      onEndReachedThreshold={0.2}
      onEndReached={_loadData}
      renderItem={_renderItem}
    />
  );
};

const styles = StyleSheet.create({
  align: {
    alignItems: "center",
  },
  iconStoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: "absolute",
  },
  white: { color: "white" },
});

export default Story;
