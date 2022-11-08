import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import axios from "axios";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667594463/Ellipse_1_deso78.png",
        }}
      />

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => navigation.navigate("SignInScreen")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark1]}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
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
    marginTop: 200,
  },
  logo: {
    width: 250,
    height: 245,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 90,
    marginTop: 50,
    flexDirection: "row",
  },
  containerx: {
    marginTop: 100,
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

  ButtonDark: {
    height: 50,
    width: 260,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 100,
    marginLeft: 80,
  },
  ButtonDark1: {
    height: 50,
    width: 260,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 80,
  },

  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
});
