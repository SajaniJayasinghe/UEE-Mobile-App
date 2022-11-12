import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Entypo";

export default function DisplayAllDonations({ navigation }) {
  const [donations, setdonations] = useState([]);
  const [filterdonations, setfilterdonations] = useState([]);
  const [search, setSearch] = useState("");
  const [userID, setuserID] = useState("");

  const getuserID = async () => {
    const userToken = await AsyncStorage.getItem("token");
    console.log(userToken);

    await axios
      .get("https://life-below-water.herokuapp.com/api/user/userprofile", {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        setuserID(res.data.User._id);
      });
  };
  useEffect(() => {
    getuserID();
    axios
      .get("https://life-below-water.herokuapp.com/api/donation/getdonation")
      .then((res) => {
        if (res.data.success) {
          setdonations(res.data.existingDonations);
        }
      });
  }, []);

  const searchFunc = (text) => {
    return donations.filter((donations) => donations.donatorName === text);
  };

  useEffect(() => {
    setfilterdonations(searchFunc(search));
  }, [search]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo1}
        source={{
          uri: "https://cdn.dribbble.com/users/3012156/screenshots/10975204/media/d02e71ce742a1dcfe3bf88e26ff03ac1.png?compress=1&resize=400x300&vertical=top",
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <TextInput
        style={styles.inputserach}
        placeholder="Search for Donator name"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <Text
        style={{
          fontWeight: "900",
          textAlign: "center",
          fontSize: 26,
          marginTop: 225,
          marginBottom: 20,
          fontColor: "black",
        }}
      >
        All Donations
      </Text>

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {(search === "" ? donations : filterdonations).map(
          (donations, index) => (
            <View style={styles.bus2} key={donations + index}>
              <Card
                style={{
                  padding: 10,
                  margin: 21,
                  marginTop: 0,
                  borderRadius: 25,
                }}
              >
                <LinearGradient
                  colors={["#79BAEC", "#C2DFFF"]}
                  style={{
                    borderRadius: 25,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      marginVertical: 2,
                      fontSize: 25,
                      marginLeft: -200,
                    }}
                  >
                    {donations.eventTitle}
                  </Text>
                </LinearGradient>
                <Text style={{ marginVertical: 2, marginTop: 10 }}>
                  Donator Name: {donations.donatorName}
                </Text>

                <Text style={{ marginVertical: 2 }}>
                  Amount : {donations.amount}
                </Text>

                {userID == donations.userID ? (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("EditDonations", {
                        donationID: donations._id,
                      })
                    }
                  >
                    <Icon
                      name="edit"
                      size={18}
                      color="black"
                      style={{
                        marginLeft: 100,
                        marginTop: -20,
                        marginLeft: 323,
                        marginBottom: -30,
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  ""
                )}
              </Card>
            </View>
          )
        )}
      </ScrollView>
      <Image
        style={styles.tinyLogo}
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
  logo: {
    width: 430,
    height: 300,
    marginTop: -30,

    alignItems: "center",
    flexDirection: "row",
  },
  log: {
    width: 350,
    height: 40,
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  inputserach: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 35,
    height: 40,
    borderWidth: 1,
  },
  tinyLogo: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: -355,
  },
  tinyLogo1: {
    width: 470,
    height: 280,
    marginLeft: -15,
    marginBottom: 30,
    marginTop: 30,
  },
});
