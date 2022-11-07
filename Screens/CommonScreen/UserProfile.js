import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

export default function UserProfile({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Image
        style={{
          width: 300,
          height: 210,
          marginTop: 10,
          marginLeft: 70,
        }}
        source={{
          uri: "https://www.nicepng.com/png/detail/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png",
        }}
      />
      <Text
        style={{
          marginVertical: 2,
          fontSize: 25,
          marginTop: 10,
          marginLeft: 170,
          fontWeight: "bold",
        }}
      >
        My Profile
      </Text>
      <View style={styles.no1}>
        <Text
          style={{
            marginLeft: 70,
            fontSize: 20,
            marginTop: 50,
          }}
        >
          Name :
        </Text>
        <Text
          style={{
            marginLeft: 70,
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Email Address :
        </Text>
        <Text
          style={{
            marginLeft: 70,
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Phone Number :
        </Text>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark1]}
          onPress={() => navigation.navigate(" ")}
        >
          <Text style={styles.loginText3}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={() => navigation.navigate(" ")}
        >
          <Text style={styles.loginText3}>Delete Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={() => navigation.navigate(" ")}
        >
          <Text style={styles.loginText3}>Log Out </Text>
        </TouchableOpacity>
      </View>

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
  loginText: {
    color: "black",
    fontSize: 38,
    lineHeight: 18,
    marginBottom: -20,
    marginLeft: 700,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 470,
    height: 230,
    marginLeft: -15,
    marginBottom: 30,
  },
  tinyLogo5: {
    width: 300,
    height: 140,
    marginBottom: -20,
    marginTop: -40,
    marginLeft: 2,
  },
  tinyLogo6: {
    width: 130,
    height: 120,
    marginBottom: -20,
    marginTop: -40,
    marginLeft: 70,
  },
  tinyLogo7: {
    width: 200,
    height: 100,
    marginBottom: -20,
    marginTop: -40,
    marginLeft: 55,
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
    width: 220,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: 110,
  },
  ButtonDark1: {
    height: 50,
    width: 220,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 100,
    marginLeft: 110,
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
    marginTop: 40,
  },
});