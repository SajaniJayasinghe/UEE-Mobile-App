import React from "react";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SpecificEventAdmin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.event1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />
      <Text
        style={{
          color: "#000000",
          textAlign: "left",
          marginTop: 10,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Mangroove restore
      </Text>
      <Icon name="edit" size={30} color="#900" style={{ marginLeft: 100 }} />

      <Icona name="delete" size={30} color="#900" style={{ marginLeft: 260 }} />

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity onPress={() => navigation.navigate("UpdateList")}>
          <Card style={{ padding: 100, margin: 25, height: 400, width: 350 }}>
            <Text
              style={{
                color: "#000000",
                textAlign: "left",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Venue - Hikkaduwa
            </Text>
            <Text
              style={{
                color: "#000000",
                textAlign: "left",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Date - 12/12/2022
            </Text>
            <Text
              style={{
                color: "#000000",
                textAlign: "left",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Time - 10.00 a.m
            </Text>
            <Text
              style={{
                color: "#000000",
                textAlign: "left",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Description - helloooooo
            </Text>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  event1: {
    width: 350,
    height: 150,
    marginLeft: -99,
    marginTop: -100,
  },
});

export default SpecificEventAdmin;
