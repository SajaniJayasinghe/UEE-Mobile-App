import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";

export default function UpdateBlog({ route, navigation }) {
  const [blogName, setblogName] = useState("");
  const [description, setdescription] = useState("");
  const [blogImage, setblogImage] = useState("");
  
 

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

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
        <Text style={styles.loginText}>Name Of Blog</Text>
        <TextInput
          placeholder="Name Of Blog"
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Description</Text>
        <TextInput
          placeholder="Description"
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Image</Text>
        <TextInput
          placeholder="Enter Image"
          style={styles.textInput2}
        ></TextInput>

        <TouchableOpacity style={[styles.containerx, styles.ButtonDark]}>
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
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 50,
    marginTop: 20,
  },
  loginText1: {
    marginLeft: 120,
    fontSize: 28,
    color: "#151B54",
    fontWeight: "bold",
    marginTop: 20,
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
  dropdown: {
    margin: 16,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    width: 334,
    marginLeft: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "#FFBC26",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 30,
    marginLeft: 50,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  blog1: {
    width: 350,
    height: 180,
    marginLeft: 19,
    marginTop: 20,
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
    marginTop: 10,
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

