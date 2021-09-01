import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Landing from "../screens/landing";
import Pointage from "../screens/pointage";

const LandingNav = createStackNavigator(
  {
    Landing: Landing,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2286c3",
      },
      headerTintColor: "white",
    },
  }
);

const PointageNav = createStackNavigator(
  {
    Pointage: Pointage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#673ab7",
      },
      headerTintColor: "white",
    },
  }
);

const AppNav = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: LandingNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <IconAntDesign name="home" size={25} color="#fafafa" />;
        },
        tabBarColor: "#0086c3",
      },
    },
    Pointage: {
      screen: PointageNav,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="back-in-time" size={25} color="#fafafa" />;
        },
        tabBarColor: "#673ab7",
      },
    },
  },
  {
    activeColor: "white",
    shifting: true,
  }
);

export default createAppContainer(AppNav);
