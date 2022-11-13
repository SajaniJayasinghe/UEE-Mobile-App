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
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1668327712/Screenshot_2022-11-13_at_13.50.12-removebg-preview_iiviiw.png",
        }}
      />
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: 0,
          fontSize: 20,
          marginBottom: 20,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Titans - Team
      </Text>
      <Text
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: 10,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        WELCOME TO
      </Text>
      <Text
        style={{
          color: "#ffff",
          textAlign: "center",
          marginTop: 10,
          fontSize: 30,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
          marginBottom: 20,
        }}
      >
        LIFE BELOW WATER
      </Text>
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
    backgroundColor: "#4863A0",
  },
  text: {
    color: "white",
  },
  tinyLogo2: {
    width: 200,
    height: 200,
    marginTop: 150,
    marginLeft: 125,
  },
  tinyLogo: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo4: {
    width: 450,
    height: 60,
    marginLeft: -15,
    marginTop: 0,
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
    marginTop: 160,
    marginBottom: 10,
    marginLeft: 130,
  },

  letsGetStarted: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
  },
});

export default LoadingScreen;
