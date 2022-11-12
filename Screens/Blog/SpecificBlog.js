import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const SpecificBlog = ({ navigation }) => {
  const [blog, setblog] = useState([]);
  const route = useRoute();

  const bID = route.params.bid;
  // console.log(bID);

  useEffect(() => {
    const data = {
      id: route.params.bid,
      blogName: route.params.blogName,
      description: route.params.description,
      blogImage: route.params.blogImage,
    };
    setblog(data);
  }, []);

  const deleteblog = async () => {
    Alert.alert("Are you sure?", "This will permanently delete Blog!", [
      {
        text: "OK",
        onPress: async () => {
          axios
            .delete(
              `https://life-below-water.herokuapp.com/api/blog/delete/${bID}`
            )
            .then((res) => {
              navigation.push("BlogsList");
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("UpdateList"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tiny}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Text
        style={{
          color: "#151B54",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        {blog.blogName}
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("UpdateBlog", {
            bid: blog.id,
            blogName: blog.blogName,
            description: blog.description,
            blogImage: blog.blogImage,
          })
        }
      >
        <Icon
          name="edit"
          size={30}
          color="#0020C2"
          style={{ marginLeft: 280, marginTop: 20 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteblog(blog.id)}>
        <Icona
          name="delete"
          size={30}
          color="#E41B17"
          style={{ marginLeft: 330, marginTop: -30 }}
        />
      </TouchableOpacity>

      <Image style={styles.blog1} source={{ uri: blog.blogImage }} />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            color: "#000000",
            marginRight: 25,
            marginTop: 25,
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "justify",
            marginLeft: 20,
          }}
        >
          {blog.description}
        </Text>
        <Text
          style={{
            color: "#000000",
            marginRight: 15,
            marginLeft: 20,
            marginTop: 15,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {blog.blogImage}
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={[styles.containerxb, styles.materialButtonDarkb]}
        onPress={() => navigation.navigate("AllAdditionalblogs")}
      >
        <Text style={styles.addnewblog}>See More</Text>
      </TouchableOpacity>
      <Image
        style={styles.tiny1}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tiny: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  tiny1: {
    width: 470,
    height: 50,
    marginLeft: -15,
    marginTop: -5,
  },
  blog1: {
    width: 380,
    height: 220,
    marginLeft: 19,
    marginTop: 30,
  },
  addnewblog: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },
  materialButtonDarkb: {
    height: 40,
    width: 130,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 15,
    marginLeft: 150,
    marginBottom: 15,
  },

  containerxb: {
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

export default SpecificBlog;
