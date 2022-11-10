import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserProfile({ route, navigation }) {
  const [token, settoken] = useState("");

  const getToken = async () => {
    settoken(await AsyncStorage.getItem("token"));
  };
  useEffect(() => {
    getToken();
    if (!!!route.prams) {
    }
  }, []);

  const [profile, setProfile] = useState("");

  const getprofile = async () => {
    const userToken = await AsyncStorage.getItem("token");
    console.log(userToken);
    await axios
      .get("https://life-below-water.herokuapp.com/api/user/userprofile", {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        setProfile(res.data.User);
      });
  };

  const deleteProfile = async (id) => {
    Alert.alert("Are you sure?", "This will permanently delete your profile!", [
      {
        text: "OK",
        onPress: async () => {
          const userToken = await AsyncStorage.getItem("token");
          axios
            .delete(
              `https://life-below-water.herokuapp.com/api/user/deleteuser`,
              {
                headers: {
                  Authorization: userToken,
                },
              }
            )
            .then((res) => {
              navigation.push("LoadingPage");
              getprofile();
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
  };

  const onLogOut = async () => {
    Alert.alert("Are you sure you want to logout?", "", [
      {
        text: "Ok",
        onPress: async () => {
          await AsyncStorage.clear();
          navigation.push("LoadingPage");
        },
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
  };

  console.log(profile);
  useEffect(() => {
    getprofile();
  }, []);

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
          marginTop: 0,
          marginLeft: 170,
          fontWeight: "bold",
        }}
      >
        My Profile
      </Text>
      <View style={styles.no1}>
        <Text
          style={{
            marginLeft: 65,
            fontSize: 20,
            marginTop: 10,
            marginRight: 20,
          }}
        >
          Full Name :
        </Text>
        <Text style={styles.textView}>{profile.name}</Text>
        <Text
          style={{
            marginLeft: 65,
            fontSize: 20,
            marginTop: 20,
            marginRight: 20,
          }}
        >
          Email Address :
        </Text>
        <Text style={styles.textView}>{profile.email}</Text>

        <Text
          style={{
            marginLeft: 65,
            fontSize: 20,
            marginTop: 20,
            marginRight: 20,
          }}
        >
          Phone Number :
        </Text>

        <Text style={styles.textView}>{profile.phoneNumber}</Text>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark1]}
          onPress={() => navigation.navigate("UpdateUserProfile", {})}
        >
          <Text style={styles.loginText3}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={() => deleteProfile(profile._id)}
        >
          <Text style={styles.loginText3}>Delete Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={onLogOut}
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
    marginLeft: 100,
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
    marginTop: 20,
    marginLeft: 100,
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
  loremIpsum3: {
    color: "#121212",
    width: 1000,
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4,
  },
  textView: {
    marginLeft: 65,
    height: 40,
    padding: 10,
    marginTop: 2,
    width: 300,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "#ffff",
    textAlign: "left",
  },
});
