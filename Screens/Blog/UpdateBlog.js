import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function UpdateBlog({ navigation }) {
  const [blog, setblog] = useState([]);
  const route = useRoute();

  // const bID = route.params.bid;

  // const [blogName, setblogName] = useState("");
  // const [description, setdescription] = useState("");
  // const [blogImage, setblogImage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`https://life-below-water.herokuapp.com/api/blog/getblog/${bID}`)
  //     .then((res) => {
  //       // setbID(res.data.blog.bID)
  //       setblogName(res.data.blog.blogName);
  //       setdescription(res.data.description);
  //       setblogImage(res.data.blogImage);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  // useEffect(() => {
  //   const data = {
  //     id:route.params.bid,
  //     blogName: route.params.blogName,
  //     description: route.params.description,
  //     blogImage:route.params.blogImage
  //   };
  //   setblog(data);
  // }, []);

  // const updateBlog = async () => {
  //   const URL = `https://life-below-water.herokuapp.com/api/blog/update/${bID}`;
  //   const payload = {
  //     blogName: blogName,
  //     description: description,
  //     blogImage: blogImage,
  //   };
  //   axios
  //     .put(URL, payload)
  //     .then((res) => {
  //       Alert.alert("Blog update successfull");
  //       navigation.navigate("UpdateList");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       Alert.alert(
  //         "Error",
  //         "Inserting Unsuccessful",
  //         [{ text: "Check Again" }],
  //         { cancelable: false }
  //       );
  //     });
  // };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />

      <Text style={styles.loginText1}>UPDATE BLOG</Text>
      <Image
        style={styles.blog1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            lineHeight: 18,
            marginBottom: -10,
            marginLeft: 40,
            marginTop: 30,
          }}
        >
          Name Of Blog
        </Text>
        <TextInput
          // value={blog.blogName}
          placeholder="Name Of Blog"
          // onChange={(e) => setblogName(e.nativeEvent.text)}
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Description</Text>
        <TextInput
          // value={blog.description}
          placeholder="Description"
          // onChange={(e) => setdescription(e.nativeEvent.text)}
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Image</Text>
        <TextInput
          // value={blog.blogImage}
          placeholder="Enter Image"
          // onChange={(e) => setblogImage(e.nativeEvent.text)}
          style={styles.textInput2}
        ></TextInput>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          // onPress={() => updateBlog()}
        >
          <Text style={styles.loginText3}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
      <Image
        style={styles.tinyLogo4}
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
  textInput2: {
    height: 40,
    width: 334,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 15,
    marginLeft: 40,
    marginBottom: 10,
  },

  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 40,
    marginTop: 10,
  },
  loginText1: {
    marginLeft: 120,
    fontSize: 28,
    color: "#151B54",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText2: {
    marginTop: 30,
    marginLeft: 50,
    fontSize: 18,
    lineHeight: 18,
  },
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
  tinyLogo: {
    width: 470,
    height: 90,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo1: {
    width: 450,
    height: 190,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  tinyLogo4: {
    width: 450,
    height: 30,
    marginLeft: -15,
    marginTop: 0,
  },

  blog1: {
    width: 390,
    height: 200,
    marginTop: 20,
    marginLeft: 14,
    marginBottom: 20,
  },
  ButtonDark: {
    height: 50,
    width: 160,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 30,
    marginLeft: 140,
  },
  containerx: {
    marginTop: -20,
    backgroundColor: "#79BAEC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16,
  },
});