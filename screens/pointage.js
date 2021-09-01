import React from "react";
import { View, Text } from "react-native";

const Pointage = (props) => {
  return (
    <View>
      <Text>Pointage</Text>
    </View>
  );
};

Pointage.navigationOptions = (navData) => {
  return {
    headerTitle: "Pointage",
  };
};

export default Pointage;
