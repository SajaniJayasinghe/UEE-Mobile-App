import React from "react";
import { Card } from "react-native-shadow-cards";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SpecificEventUser = ({ navigation }) => {
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

      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("donate")}
      >
        <Text style={styles.addnewblog}>Donate</Text>
      </TouchableOpacity>

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
  materialButtonDark: {
    height: 50,
    width: 160,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 25,
    marginLeft: 220,
    marginBottom: 15,
  },

  addnewblog: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },

  containerx: {
    backgroundColor: "#C2DFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16,
  },
});

export default SpecificEventUser;
