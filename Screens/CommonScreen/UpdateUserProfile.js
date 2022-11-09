import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function UpdateUserProfile({ route, navigation }) {
  useEffect(() => {
    if (!!!route.prams) {
    }
  }, []);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const getUser = async () => {
    var token = await AsyncStorage.getItem("token");
    console.log(token);
    await axios
      .get(`https://life-below-water.herokuapp.com/api/user/userprofile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setname(res.data.User.name);
          setemail(res.data.User.email);
          setphoneNumber(res.data.User.phoneNumber);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async () => {
    const Token = await AsyncStorage.getItem("token");
    const URL = `https://life-below-water.herokuapp.com/api/user/updateuser`;

    const payload = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    };

    axios
      .put(URL, payload, {
        headers: {
          Authorization: Token,
        },
      })
      .then((_response) => {
        Alert.alert(
          "Use Profile Updated",
          "Your Profile has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("UserDashboard", {}),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
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
          marginLeft: 120,
          marginBottom: 40,
          fontWeight: "bold",
        }}
      >
        Update My Profile
      </Text>
      <View style={styles.no1}>
        <Text
          style={{
            marginVertical: 2,
            fontSize: 17,
            marginTop: 10,
            marginBottom: -10,
            marginLeft: 70,
          }}
        >
          Enter Your Name :
        </Text>
        <TextInput
          keyboardType=" Enter Your Name"
          style={styles.textView}
          value={name}
          onChange={(e) => setname(e.nativeEvent.text)}
          placeholder="   Enter Your Name"
        />
        <Text
          style={{
            marginVertical: 2,
            fontSize: 17,
            marginTop: 20,
            marginBottom: -10,
            marginLeft: 70,
          }}
        >
          Your Email Address :
        </Text>
        <TextInput
          keyboardType=" Email Address"
          value={email}
          onChange={(e) => setemail(e.nativeEvent.text)}
          style={styles.textView}
        />
        <Text
          style={{
            marginVertical: 2,
            fontSize: 17,
            marginTop: 20,
            marginBottom: -10,
            marginLeft: 70,
          }}
        >
          Enter your Phone Number :
        </Text>
        <TextInput
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.nativeEvent.text)}
          placeholder="   Enter Your Phone Number"
          style={styles.textView}
        />
      </View>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => updateUser()}
      >
        <Text style={styles.loginText3}>Update</Text>
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
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },

  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 10,
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4,
  },
  textView: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 65,
    marginTop: 15,
    width: 300,
    fontSize: 16,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ffff",
    textAlign: "left",
  },
  textView1: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 65,
    marginTop: -35,
    width: 300,
    fontSize: 16,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ffff",
    textAlign: "left",
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
    marginTop: 30,
    marginLeft: 110,
    marginBottom: 100,
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
    fontSize: 19,
    lineHeight: 18,
  },
});
