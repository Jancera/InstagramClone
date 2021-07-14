import React from "react";
import { Image, Dimensions } from "react-native";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Post = ({ element }) => {
  const { width } = Dimensions.get("window");
  return (
    <>
      <PostHeader {...{ element }} />
      <Image
        style={{
          width,
          height: width,
        }}
        source={element.url}
        resizeMode="cover"
      />
      <PostFooter {...{ element }} />
    </>
  );
};

export default Post;
