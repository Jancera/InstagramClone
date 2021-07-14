import React, { useCallback } from "react";
import { FlatList, Dimensions, Image } from "react-native";

const FlatListCarrousel = ({ data, activeImage }) => {
  const { width } = Dimensions.get("window");

  const _onViewableItemsChanged = useCallback(
    ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        activeImage.value = viewableItems[0].index;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const _viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const _renderItem = ({ item }) => {
    return (
      <Image
        style={{
          width,
          height: width,
        }}
        source={item}
        resizeMode="cover"
      />
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.uri)}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      pagingEnabled
      decelerationRate="fast"
      initialNumToRender={10}
      windowSize={10}
      maxToRenderPerBatch={10}
      onViewableItemsChanged={_onViewableItemsChanged}
      viewabilityConfig={_viewabilityConfig}
      renderItem={_renderItem}
    />
  );
};

export default FlatListCarrousel;
