import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { dataAPI } from "../data";

const LikesAndComments = ({ element }) => {
  const { userLoggedInfo } = dataAPI;
  return (
    <>
      {element.commonLike !== undefined ? (
        <View style={styles.container}>
          <View style={styles.likes}>
            <Image
              source={element.commonLike.profilePhoto}
              style={styles.image}
            />
            <Text style={styles.text}>
              {"  "}
              Liked by{" "}
            </Text>
            <Text style={styles.textBold}>
              {element.commonLike.name}
            </Text>
            <Text style={styles.text}> and </Text>
            <Text style={styles.textBold}>
              {element.likes} others
            </Text>
          </View>
          <View style={styles.userDescription}>
            <Text style={styles.textBold}>
              {element.username}
            </Text>
            <Text style={styles.text}>
              {"  "}
              {element.description}
            </Text>
          </View>
          {element.comments === 0 ? null : (
            <Text style={styles.textGrey}>
              View all {element.comments} comments
            </Text>
          )}
          <View style={styles.addComment}>
            <View style={styles.horizontal}>
              <Image
                source={userLoggedInfo.profile_image}
                style={styles.image}
              />
              <Text style={styles.textGrey}>
                {"  "}Add a comment...
              </Text>
            </View>
            <Ionicons
              name="add-circle-outline"
              size={15}
              color="grey"
            />
          </View>
          <Text style={styles.time}>{element.time}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.likes}>
            <Text style={styles.textBold}>
              {element.likes} likes
            </Text>
          </View>
          <View style={styles.userDescription}>
            <Text style={styles.textBold}>
              {element.username}
            </Text>
            <Text style={styles.text}>
              {"  "}
              {element.description}
            </Text>
          </View>
          {element.comments === 0 ? null : (
            <Text style={styles.textGrey}>
              View all {element.comments} comments
            </Text>
          )}
          <View style={styles.addComment}>
            <View style={styles.horizontal}>
              <Image
                source={userLoggedInfo.profile_image}
                style={styles.image}
              />
              <Text style={styles.textGrey}>
                {"  "}Add a comment...
              </Text>
            </View>
            <Ionicons
              name="add-circle-outline"
              size={15}
              color="grey"
            />
          </View>
          <Text style={styles.time}>{element.time}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  image: { width: 25, height: 25, borderRadius: 13 },
  text: { color: "white" },
  textBold: { color: "white", fontWeight: "bold" },
  userDescription: {
    flexDirection: "row",
    marginBottom: 5,
  },
  textGrey: { color: "grey", marginBottom: 5 },

  addComment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  horizontal: { flexDirection: "row" },
  time: { color: "grey", fontSize: 12 },
});

export default LikesAndComments;
