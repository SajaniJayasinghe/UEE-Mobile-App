import React, { useEffect, useState } from "react";

import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput,Card } from "react-native";

const AddBlog = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Blog Name"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               />
  
      <Image
        style={styles.blog1}
        source={{
          uri: "https://t3.ftcdn.net/jpg/02/70/22/86/360_F_270228625_yujevz1E4E45qE1mJe3DyyLPZDmLv4Uj.jpg",
        }}
      />
 <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 40,
          marginLeft:-220,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Blog Content
      </Text>
      <TextInput style = {styles.input1}
               underlineColorAndroid = "transparent"
               autoCapitalize = "none"
               />
 <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("BlogsList")}
      >
        <Text style={styles.addnewblog}>ADD BLOG</Text>
      </TouchableOpacity>

        </View>
        );
    };
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        input: {
            margin: 15,
            height: 40,
            borderColor: '#000000',
            borderWidth: 1
         },
         blog1: {
            width: 380,
            height: 250,
            marginLeft: 9,
            marginTop: 40,
          },
          input1: {
            margin: 15,
            height: 140,
            borderColor: '#000000',
            borderWidth: 1
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
            marginLeft: 130,
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
  

    export default AddBlog;