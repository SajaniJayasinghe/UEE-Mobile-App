import React from "react";
import { Card } from "react-native-shadow-cards";
import SearchBar from "react-native-dynamic-search-bar";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const BlogsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#151B54",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        BLOGS LIST
      </Text>
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("UpdateList")}
      >
        <Text style={styles.addnewblog}>Add New Blog</Text>
      </TouchableOpacity>

      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        backgroundColor="#DBE9FA"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity onPress={() => navigation.navigate("UpdateList")}>
          <Card style={{ padding: 100, margin: 25, height: 300, width: 350 }}>
            <Image
              style={styles.blog1}
              source={{
                uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 10,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Saving Marine Life
            </Text>

            <Text
              style={{
                color: "#000000",
                marginRight: -85,
                marginLeft: -60,
                marginTop: 10,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Marine life, sea life, or ocean life is the plants, animals and
              other organisms that live in the salt water of seas or oceans, or
              the brackish water of coastal
            </Text>
          </Card>
        </TouchableOpacity>
        <Card style={{ padding: 100, margin: 25, height: 300, width: 350 }}>
          <Image
            style={styles.blog1}
            source={{
              uri: "https://oceana.org/wp-content/uploads/sites/18/cephalopods.jpg",
            }}
          />
          <Text
            style={{
              color: "#000000",
              textAlign: "center",
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Protect The Ocean
          </Text>

          <Text
            style={{
              color: "#000000",
              marginRight: -85,
              marginLeft: -60,
              marginTop: 10,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Under the Name Coral, We Find Different Species, Some of Which Live
            in the Mediterranean. What Is Coral? Coral: Plant or Animal? Coral
            at the Oceanographic Institute.
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blog1: {
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

  log2: {
    width: 389,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
  },
});

export default BlogsList;
