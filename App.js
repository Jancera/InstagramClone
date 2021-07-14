import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "./src/telas/Home";
import Profile from "./src/telas/Profile";
import Reels from "./src/telas/Reels";
import Search from "./src/telas/Search";
import Shop from "./src/telas/Shop";
import HomeIconNavBar from "./assets/Icons/HomeIconNavBar";
import SearchIconNavBar from "./assets/Icons/SearchIconNavBar";
import ReelsIconNavBar from "./assets/Icons/ReelsIconNavBar";
import ShopIconNavBar from "./assets/Icons/ShopIconNavBar";
import ProfileIconNavBar from "./assets/Icons/ProfileIconNavBar";

const App = () => {
  const Bottom = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "#000",
          },
        }}
      >
        <Bottom.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeIconNavBar focused={focused} />
            ),
          }}
        />
        <Bottom.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <SearchIconNavBar focused={focused} />
            ),
          }}
        />
        <Bottom.Screen
          name="Reels"
          component={Reels}
          options={{
            tabBarIcon: ({ focused }) => (
              <ReelsIconNavBar focused={focused} />
            ),
          }}
        />
        <Bottom.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ focused }) => (
              <ShopIconNavBar focused={focused} />
            ),
          }}
        />
        <Bottom.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <ProfileIconNavBar focused={focused} />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};

export default App;
