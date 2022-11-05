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

export default function SignUpScreen({ navigation }) {
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
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591659/Turtle-ocean-scaled-1200x630-cropped_jfdsik.jpg",
        }}
      />
      <Text style={styles.loginText}>Enter Your Full Name</Text>
      <TextInput
        placeholder="Full Name"
        style={styles.textInput2}
        // onChange={(e) => setEmail(e.nativeEvent.text)}
        // value={email}
      ></TextInput>

      <Text style={styles.loginText}>Enter Your Phone Number</Text>
      <TextInput
        placeholder="Phone Number"
        style={styles.textInput2}
        // onChange={(e) => setEmail(e.nativeEvent.text)}
        // value={email}
      ></TextInput>

      <Text style={styles.loginText}>Enter Your Email</Text>
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
        style={styles.textInput2}
        // onChange={(e) => setPwd(e.nativeEvent.text)}
        // value={pwd}
      ></TextInput>

      <Text style={styles.loginText}>Enter Confirm Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Confirm Password"
        style={styles.textInput2}
        // onChange={(e) => setPwd(e.nativeEvent.text)}
        // value={pwd}
      ></TextInput>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        // onPress={() => {
        //   loginUser();
        // }}
      >
        <Text style={styles.loginText3}>Register</Text>
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
  tinyLogo2: {
    width: 470,
    height: 230,
    marginLeft: -15,
    marginBottom: 30,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 44,
  },
  textInput2: {
    height: 40,
    width: 334,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 45,
    marginBottom: 10,
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
    marginTop: 10,
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
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 20,
  },
});
