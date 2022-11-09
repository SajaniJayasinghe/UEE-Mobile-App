import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const storetoken = async (value) => {
    await AsyncStorage.setItem("token", value);
  };

  const loginUser = async () => {
    const URL = "https://life-below-water.herokuapp.com/api/user/login";
    await axios
      .post(URL, { email: email, password: password })
      .then((res) => {
        if (res.data) {
          AsyncStorage.clear();
          console.log(res.data);
          storetoken(res.data.token);
          switch (res.data.role) {
            case "Admin":
              console.log("Admin");
              navigation.navigate("AdminDashboard");

              break;
            case "User":
              navigation.navigate("UserDashboard");
              break;
            default:
              console.log("Invalid User role");
          }
        }
      })
      .catch((error) => {
        Alert.alert("Loging Faild");
      });
  };

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
          uri: "https://www.absolutearts.com/portfolio3/g/garyboswellart/sea_turtles_over_reef-1560688826l.jpg",
        }}
      />

      <Text
        style={{
          fontSize: 28,
          marginLeft: 130,
          marginTop: 30,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        SignIn Page
      </Text>
      <Text style={styles.loginTex2}>Enter Your Email</Text>

      <TextInput
        placeholder="E-mail Address"
        style={styles.textInput2}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        value={email}
      ></TextInput>

      <Text style={styles.loginText}>Enter Your Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Password"
        style={styles.textInput}
        onChange={(e) => setpassword(e.nativeEvent.text)}
        value={password}
      ></TextInput>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          loginUser();
        }}
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
    height: 80,
    marginLeft: -15,
    marginTop: 80,
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
    height: 50,
    width: 334,
    textAlign: "center",
    borderColor: "#000000",
    fontSize: 18,
    borderRadius: 25,
    marginTop: 12,
    marginLeft: 45,
    borderWidth: 1,
  },

  textInput2: {
    height: 50,
    width: 334,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 25,
    marginTop: 10,
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
    height: 240,
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
    marginLeft: 130,
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
