import React, { useState } from "react";
import axios from "axios";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput,Card, Alert,Hyperlink } from "react-native";


export default function AddBlog({ route, navigation }) {
  const [blogNamea, setblogNamea] = useState("");
  const [blogurl, setblogurl] = useState("");
  const [blogImagea, setblogImagea] = useState("");

  const newuserblog = () => {
    const URL = `https://life-below-water.herokuapp.com/api/userblog/adduserblog`;

    const payload = {
      blogNamea: blogNamea,
      blogurl: blogurl,
      blogImagea: blogImagea,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("Blog Added Successfully");
        navigation.navigate("AllAdditionalblogs");
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

<ScrollView style={{ width: "100%", margin: 1 }}>
           <Text
        style={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: 26,
          marginLeft: -10,
          marginTop: 30,
        }}
      >
        Create Additional Blogs
      </Text>
      <View>
        <Text
          style={{
            fontWeight: "800",
            //   opacity: 0.6,
            textAlign: "left",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Blog Name
        </Text>
        <TextInput
          keyboardType="Blog Name"
          style={styles.input}
          onChange={(e) => setblogNamea(e.nativeEvent.text)}
          value={blogNamea}
        />
 
        <Text
          style={{
            fontWeight: "800",
            //   opacity: 0.6,
            textAlign: "left",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        
        >
         Blog URL
        </Text>
        <TextInput
          keyboardType="blogurl"
          style={styles.input2}
          onChange={(e) => setblogurl(e.nativeEvent.text)}
          value={blogurl}
        />
        <Text
          style={{
            fontWeight: "800",
            //   opacity: 0.6,
            textAlign: "left",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 100,
          }}
        >
          Add Image
        </Text>
        <TextInput
          keyboardType="Blog Image"
          style={styles.input2}
          onChange={(e) => setblogImagea(e.nativeEvent.text)}
          value={blogImagea}
        />
      </View>
      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          newuserblog();
        }}
      >
        <Text style={styles.letsGetStarted}> CREATE BLOG </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    marginLeft: 60,
    width: 290,
  },
  input2: {
    height: 125,
    margin: 12,
    marginTop: 15,
    borderWidth: 1,
    padding: 10,
    marginLeft: 60,
    width: 290,
    marginBottom: -70,
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
    height: 50,
    width: 170,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 200,
    marginTop: 150,
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
