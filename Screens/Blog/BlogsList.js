import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-native-shadow-cards";
import SearchBar from "react-native-dynamic-search-bar";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";

export default function BlogsList({ navigation }) {
  const [blog, setblog] = useState([]);

 

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/blog/getblog")
      .then((res) => {
        if (res.data.success) {
          setblog(res.data.existingBlogs);
        }
      });
  }, []);

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
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("AddBlog")}
      >
        <Text style={styles.addnewblog}>Add New Blog</Text>
      </TouchableOpacity>
        
        <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        style={{
          borderWidth:1,
        }}
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
       />
       <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
          {blog.map((blog, index) => (
            <View key={blog + index}>
      <TouchableOpacity
       onPress={() => navigation.navigate("UpdateList",{
        bid:blog._id,
        blogName:blog.blogName,
        description:blog.description,
        blogImage:blog.blogImage
       })}>
      <Card
       style={{ padding: 100, margin:-4, height:300, width:350, marginBottom:30}}
      
      >
      {/* <Image
        style={styles.blog1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      /> */}
      <Image
             style={styles.blog1}
              source={{uri:blog.blogImage}}
            />
         <Text
                  style={{
                    marginVertical: 5,
                    fontSize: 20,

                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  {blog.blogName}
                </Text>
                <Text
                  style={{
                    marginVertical: 5,
                    fontSize: 20,

                    flexDirection: "row",
                    justifyContent: "flex-end",
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
            marginBottom:15,
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
    
