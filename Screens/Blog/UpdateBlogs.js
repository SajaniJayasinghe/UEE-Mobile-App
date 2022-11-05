import React from "react";

import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";

const UpdateBlogs = ({ navigation }) => {
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
       Saving Marine Life
      </Text>
      <Image
        style={styles.blog1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />  

<Text
        style={{
          color: "#000000",
          marginRight:15,
          marginLeft:20,
          marginTop: 25,
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
      The first observations were made in the Mediterranean, by Pliny the Elder (1st century AD) on red coral (the one from which jewellery is made). 
      Once brought to the surface, the coral would quickly die. Thus, it was considered a sea plant that turned into stone when taken out of th
      e water. It was not until the middle of the 18th century that it was recognized as an animal that was classified in the large 
      family of stinging animals, the Cnidaria.
        </Text>

        <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("UpdateList")}
      >
        <Text style={styles.addnewblog}>Save Changes</Text>
      </TouchableOpacity>
      </View>
        );
    };
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        blog1: {
            width: 350,
            height: 240,
            marginLeft: 19,
            marginTop: 20,
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
            marginTop: 55,
            marginLeft: 120,
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
          
    });
    export default UpdateBlogs;