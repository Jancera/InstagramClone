import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const ProfileIconNavBar = ({ focused }) => {
  return (
    <>
      {focused ? (
        <MaterialCommunityIcons
          name="account-circle"
          size={30}
          color="white"
        />
      ) : (
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={30}
          color="white"
        />
      )}
    </>
  );
};

export default ProfileIconNavBar;
