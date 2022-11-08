import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function SignInScreen({ navigation }) {
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
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591659/Scuba-Divers-Ocean-roles-41_gnkedv.jpg",
        }}
      />
      <Text style={styles.loginTex2}>Enter Your Email</Text>

      <TextInput
        placeholder="E-mail Address"
        style={styles.textInput2}
        // onChange={(e) => setEmail(e.nativeEvent.text)}
        // value={email}
      ></TextInput>

      <Text style={styles.loginText}>Enter Your Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Password"
        style={styles.textInput}
        // onChange={(e) => setPwd(e.nativeEvent.text)}
        // value={pwd}
      ></TextInput>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        // onPress={() => {
        //   loginUser();
        // }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.loginText3}>Login</Text>
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
  tinyLogo4: {
    width: 450,
    height: 60,
    marginLeft: -15,
    marginTop: 90,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    borderWidth: 1,
  },
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
  loginTex2: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginTop: 50,
    marginLeft: 50,
  },
  textInput: {
    color: "#121212",
    height: 55,
    width: 334,
    textAlign: "center",
    borderColor: "#000000",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 45,
    borderWidth: 1,
  },

  textInput2: {
    height: 55,
    width: 334,
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 45,
    borderWidth: 1,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginTop: 20,
    marginLeft: 50,
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
    marginTop: 30,
    marginLeft: 120,
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
