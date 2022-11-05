import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const LoadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Image
        style={styles.tinyLogo2}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591652/1421195_zbvn6n.webp",
        }}
      />
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 20,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        WELCOME TO
      </Text>
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 10,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
          marginBottom: 22,
        }}
      >
        LIFE BELOW WATER
      </Text>
      <Image
        style={styles.tinyLogo3}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591652/1319008_jazlut.jpg",
        }}
      />
      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.letsGetStarted}> Get Started</Text>
      </TouchableOpacity>
      <Image
        style={styles.tinyLogo4}
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
    backgroundColor: "#D3EAFF",
  },
  tinyLogo: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo2: {
    width: 470,
    height: 300,
    marginLeft: -15,
  },
  tinyLogo3: {
    width: 450,
    height: 310,
    marginLeft: -15,
  },
  tinyLogo4: {
    width: 450,
    height: 60,
    marginLeft: -15,
    marginTop: 20,
  },
  text: {
    color: "black",
    marginTop: 5,
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
    marginTop: -80,
    marginBottom: 10,
    marginLeft: 130,
  },

  letsGetStarted: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },

  containerx: {
    backgroundColor: "#FFFFFF",
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

  loading: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 140,
    flexDirection: "row",
  },
});

export default LoadingScreen;
