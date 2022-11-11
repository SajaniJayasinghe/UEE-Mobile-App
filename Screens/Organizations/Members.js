import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "react-native-dynamic-search-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Members({ navigation }) {
  const [organizationMembers, setorganizationMembers] = useState([]);
  const route = useRoute();

  const oid = route.params.id;
  const organizationName = route.params.organizationName;
  console.log("organizationMembers", organizationName);

  const AddMe = async () => {
    const userToken = await AsyncStorage.getItem("token");
    console.log(userToken);
    console.log(oid);
    await axios
      .post(
        `https://life-below-water.herokuapp.com/api/organization/addmember/${oid}`,
        {
          headers: {
            Authorization: userToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        Alert.alert("Member added");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error", "Added Unsuccessful", [{ text: "Check Again" }], {
          cancelable: false,
        });
      });
  };
  useEffect(() => {
    axios
      .get(
        `https://life-below-water.herokuapp.com/api/organization/members/${oid}`
      )
      .then((res) => {
        if (res.data.success) {
          setorganizationMembers(res.data.Members);
        }
      });
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
        style={styles.event1}
        source={require("../../assets/partner.png")}
      />
      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        style={{ borderWidth: 1, marginTop: -265, marginBottom: 210 }}
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
      <Text
        style={{
          fontWeight: "900",
          // opacity: 0.6,
          textAlign: "center",
          fontSize: 26,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {organizationName}
      </Text>

      <TouchableOpacity
        style={[styles.containerx1, styles.materialButtonDark1]}
        onPress={AddMe}
      >
        <Text style={styles.addnewblog}>Add Me</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "900",
          marginLeft: 30,
          textAlign: "left",
          fontSize: 20,
          marginTop: 10,
        }}
      >
        Members
      </Text>
      {organizationMembers ? (
        <ScrollView style={{ display: "flex", flexDirection: "column" }}>
          {organizationMembers.map((organization, index) => (
            <View key={organization + index}>
              <View
                style={{
                  padding: 5,
                  marginLeft: 30,
                  margin: 21,
                  flexDirection: "row",
                  fontSze: 20,
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Text style={styles.text}>
                  {index + 1}. {organization.name}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>No Members</Text>
      )}
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
  event1: {
    width: 430,
    height: 230,
    marginTop: 40,
  },
  tinyLogo: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 10,
  },
  logo: {
    width: 430,
    height: 300,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  log: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  log2: {
    width: 375,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
  },
  ButtonDark: {
    height: 0,
    width: 350,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: 100,
    marginLeft: 5,
  },
  containerx: {
    backgroundColor: "#ADDFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 78,
    paddingLeft: 3,
    paddingRight: 3,
  },
  text: {
    fontSize: 20,
    marginTop: -10,
    marginBottom: -50,
  },
  containerx1: {
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
  materialButtonDark1: {
    height: 30,
    width: 100,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: -5,
    marginLeft: 300,
    marginBottom: 10,
  },
});
