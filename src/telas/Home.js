import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Story from "../components/Story";
import MessengerIconStatic from "../../assets/Icons/MessengerIconStatic";
import InstagramIcon from "../../assets/Icons/InstagramIcon";
import NewPostIcon from "../../assets/Icons/NewPostIcon";
import LikeIconStatic from "../../assets/Icons/LikeIconStatic";
import Post from "../components/Post";
import PostCarrousel from "../components/PostCarrousel";

import { dataAPI } from "../data";

const Home = () => {
  const [posts, setPosts] = useState(dataAPI.posts);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const _loadData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setPosts([...posts, ...dataAPI.posts]);
      setRefreshing(false);
    }, 2000);
  };
  const _loadDataEnd = () => {
    setLoading(true);
    setTimeout(() => {
      setPosts([...posts, ...dataAPI.posts]);
      setLoading(false);
    }, 2000);
  };

  const _listFooterComponent = () => (
    <>
      {loading ? (
        <ActivityIndicator
          style={styles.marginActivityIndicator}
          size="large"
          color="white"
        />
      ) : null}
    </>
  );

  const _renderItem = ({ item }) => {
    if (item.carrousel) {
      return <PostCarrousel element={item} />;
    } else {
      return <Post element={item} />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <InstagramIcon />
        <View style={styles.LeftHeaderIcons}>
          <NewPostIcon />
          <LikeIconStatic />
          <MessengerIconStatic />
        </View>
      </View>

      <FlatList
        ListHeaderComponent={
          <Story {...{ data: dataAPI.stories }} />
        }
        data={posts}
        keyExtractor={(post) => String(post.id)}
        showsVerticalScrollIndicator={false}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        removeClippedSubviews
        refreshing={refreshing}
        onRefresh={_loadData}
        onEndReachedThreshold={0.2}
        onEndReached={_loadDataEnd}
        renderItem={_renderItem}
        ListFooterComponent={_listFooterComponent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    backgroundColor: "black",
  },
  LeftHeaderIcons: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.5,
    justifyContent: "space-around",
  },
  marginActivityIndicator: { marginVertical: 10 },
});

export default Home;
