import React, { useContext, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  ScrollView,
} from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from "native-base";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Landing = (props) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.1.185:5000/api/bonplan/site/${id}`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.bonPlan);
    };
    sendRequest();
  }, []);

  const [list, setList] = useState([]);

  const id = props.navigation.getParam("id");
  console.log(id);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        `http://192.168.1.185:5000/api/bonplan/site/${id}`
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setList(responseData.bonPlan);
    };
    sendRequest();
  }, []);
  console.log(list);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {list &&
        list.map((row) => (
          <ListItem avatar>
            <Body>
              <Text>{row.titre}</Text>
              <Text>{row.type}</Text>
              <Text note>{row.description}</Text>
            </Body>
            <Right>
              <Text note>{row.Ddebut}</Text>
              <Text note>{row.Dfin}</Text>
            </Right>
          </ListItem>
        ))}
    </ScrollView>
  );
};

Landing.navigationOptions = (navData) => {
  return {
    headerTitle: "Acceuil",
  };
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  MealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default Landing;
