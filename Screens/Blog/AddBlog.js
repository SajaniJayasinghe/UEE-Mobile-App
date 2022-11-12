import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Card,
  Alert,
} from "react-native";

export default function AddBlog({ route, navigation }) {
  const [blogName, setblogName] = useState("");
  const [description, setdescription] = useState("");
  const [blogImage, setblogImage] = useState("");
  const newblog = () => {
    const URL = `https://life-below-water.herokuapp.com/api/blog/addblog`;

    const payload = {
      blogName: blogName,
      description: description,
      blogImage: blogImage,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("Blog Added Successfully");
        navigation.navigate("BlogsList");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Blog adding Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Image
        style={styles.tinyLogo1}
        source={{
          uri: "https://cdn.shopify.com/s/files/1/0024/1788/5284/files/most-endangered-marine-species.jpg?5290",
        }}
      />
      <ScrollView style={{ width: "100%", margin: 1 }}>
        <Text
          style={{
            fontWeight: "800",
            textAlign: "center",
            fontSize: 26,
            marginLeft: -10,
            marginTop: 20,
          }}
        >
          Create Blog
        </Text>
        <View>
          <Text
            style={{
              fontWeight: "800",
              textAlign: "left",
              fontSize: 20,
              marginLeft: 60,
              marginTop: 20,
              marginBottom: -10,
            }}
          >
            Blog Name
          </Text>
          <TextInput
            keyboardType="Blog Name"
            style={styles.input}
            onChange={(e) => setblogName(e.nativeEvent.text)}
            value={blogName}
          />

          <Text
            style={{
              fontWeight: "800",
              textAlign: "left",
              fontSize: 20,
              marginLeft: 60,
              marginTop: 30,
              marginBottom: -10,
            }}
          >
            Description
          </Text>
          <TextInput
            keyboardType="Description"
            style={styles.input2}
            onChange={(e) => setdescription(e.nativeEvent.text)}
            value={description}
          />
          <Text
            style={{
              fontWeight: "800",
              textAlign: "left",
              fontSize: 20,
              marginLeft: 60,
              marginTop: 120,
              marginBottom: -10,
            }}
          >
            Add Image
          </Text>
          <TextInput
            keyboardType="Blog Image"
            style={styles.input2}
            onChange={(e) => setblogImage(e.nativeEvent.text)}
            value={blogImage}
          />
        </View>
        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={() => {
            newblog();
          }}
        >
          <Text style={styles.letsGetStarted}> CREATE BLOG </Text>
        </TouchableOpacity>
      </ScrollView>
      <Image
        style={styles.tinyLogo3}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo3: {
    width: 490,
    height: 30,
    marginLeft: -15,
    marginTop: -10,
  },
  tinyLogo1: {
    width: 450,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 50,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    marginLeft: 60,
    width: 290,
    marginBottom: -10,
    borderRadius: 25,
  },
  input2: {
    height: 125,
    margin: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    marginLeft: 60,
    width: 290,
    marginBottom: -100,
    borderRadius: 25,
  },
  loginlogo: {
    width: 440,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: -35,
  },
  logo1: {
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    flexDirection: "row",
    marginBottom: 30,
  },

  ButtonDark: {
    height: 40,
    width: 180,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 120,
    marginTop: 120,
  },
  containerx: {
    backgroundColor: "#ADDFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: "black",
    marginTop: 5,
  },
  loginText: {
    color: "black",
    fontSize: 19,
  },
  loading: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 140,
    flexDirection: "row",
  },
  letsGetStarted: {
    fontSize: 20,
  },
});
