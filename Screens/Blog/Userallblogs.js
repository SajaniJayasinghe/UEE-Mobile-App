import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-native-shadow-cards";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default function Userallblogs({ navigation }) {
  const [blog, setblog] = useState([]);
  const [filterblogs, setfilterblogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/blog/getblog")
      .then((res) => {
        if (res.data.success) {
          setblog(res.data.existingBlogs);
        }
      });
  }, []);

  const searchFunc = (text) => {
    return blog.filter((blog) => blog.blogName === text);
  };

  useEffect(() => {
    setfilterblogs(searchFunc(search));
  }, [search]);

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
        BLOGS LIST
      </Text>
      <TextInput
        style={styles.inputserach}
        placeholder="Search for Blogs"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
          {(search === "" ? blog : filterblogs).map((blog, index) => (
            <View key={blog + index}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("UserSpecificblog", {
                    bid: blog._id,
                    blogName: blog.blogName,
                    description: blog.description,
                    blogImage: blog.blogImage,
                  })
                }
              >
                <Card
                  style={{
                    padding: 100,
                    margin: -4,
                    height: 330,
                    width: 350,
                    marginBottom: 30,
                    marginLeft: 10,
                  }}
                >
                  <Image
                    style={styles.blog1}
                    source={{ uri: blog.blogImage }}
                  />
                  <Text
                    style={{
                      marginVertical: 5,
                      fontSize: 20,
                      fontWeight: "bold",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    {blog.blogName}
                  </Text>
                  <Text
                    style={{
                      marginVertical: 5,
                      fontSize: 15,
                      flexDirection: "row",
                      textAlign: "justify",
                      margin: -80,
                    }}
                  >
                    {blog.description}
                  </Text>
                </Card>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

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
    height: 40,
    marginLeft: -15,
    marginTop: -50,
  },
  blog1: {
    width: 350,
    height: 150,
    marginLeft: -99,
    marginTop: -100,
  },
  inputserach: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    width: 370,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 24,
    height: 40,
    borderWidth: 1,
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
