import React from "react";

import { useSharedValue } from "react-native-reanimated";
import FlatListCarrousel from "./FlatListCarrousel";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const PostCarrousel = ({ element }) => {
  const activeImage = useSharedValue(0);
  return (
    <>
      <PostHeader {...{ element }} />
      <FlatListCarrousel
        data={element.url}
        {...{ activeImage }}
      />
      <PostFooter
        quantity={element.url.length}
        {...{ element, activeImage }}
      />
    </>
  );
};

export default PostCarrousel;
