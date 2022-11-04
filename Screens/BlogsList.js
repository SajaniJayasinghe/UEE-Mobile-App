import React from "react";
import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";

import { View, Image, StyleSheet, Text, TouchableOpacity} from "react-native";

const BlogsList = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        BLOGS LIST
      </Text>
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("PassengerPage")}
      >
        <Text style={styles.addnewblog}>Add New Blog</Text>
      </TouchableOpacity>
      <Card style={{ padding: 100, margin: 25, height:100}}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />
      </Card>
      </View>
        );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        tinyLogo: {
            width: 320,
            height: 150,
            marginLeft: -85,
            marginTop: -70,
          },

        materialButtonDark: {
            height: 50,
            width: 160,
            borderRadius: 100,
            shadowColor: "rgba(0,0,0,1)",
            shadowOffset: {
              width: 3,
              height: 3,
            },
            elevation: 5,
            shadowOpacity: 1,
            shadowRadius: 0,
            marginTop: 42,
            marginLeft: 200,
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
    
    export default BlogsList ;