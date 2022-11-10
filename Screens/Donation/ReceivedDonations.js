import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchBar from "react-native-dynamic-search-bar";
import axios from "axios";
import { Card } from "react-native-shadow-cards";

export default function ReceivedDonations({ navigation }) {
  const [donations, setdonations] = useState([]);

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/donation/getdonation")
      .then((res) => {
        if (res.data.success) {
          setdonations(res.data.existingDonations);
        }
      });
  }, []);

  const deletedonation = async (id) => {
    Alert.alert("Are you sure?", "This will permanently delete donation!", [
      {
        text: "OK",
        onPress: async () => {
          axios
            .delete(
              `https://life-below-water.herokuapp.com/api/user/deletedonation/${donationID}`
            )
            .then((res) => {
              navigation.push("LoadingPage");
            })
            .catch((e) => {
              console.error(e);
            });
        },
      },
    ]);
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
        style={styles.tinyLogo1}
        source={{
          uri: "https://www.hkcompanyregistration.com/wp-content/uploads/2020/07/networking-for-jobs-in-hongkong.jpg",
        }}
      />
      <Text style={styles.loginText1}>Received Donations</Text>
      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        style={{
          borderWidth: 1,
          width: 380,
          marginBottom: 10,
          marginTop: 10,
        }}
        onChangeText={(text) => console.log(text)}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {donations.map((donations, index) => (
          <View style={styles.donate} key={donations + index}>
            <Card
              style={{ padding: 7, margin: 10, marginLeft: 20, height: 120 }}
            >
              <Text style={styles.eventName}>
                Event Name : {donations.eventTitle}
              </Text>
              <Text style={styles.donation}>
                Donator name : {donations.donatorName}
              </Text>
              <Icon
                name="delete-forever"
                onPress={() => deletedonation(donations._id)}
                style={styles.icon}
              ></Icon>
            </Card>
          </View>
        ))}
      </ScrollView>
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
  rect1: {
    width: 384,
    height: 86,
    marginTop: -30,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    shadowRadius: 13,
    marginLeft: 20,
    marginTop: 20,
  },
  eventName: {
    color: "#121212",
    height: 24,
    width: 500,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    marginRight: 35,
  },
  donation: {
    color: "#121212",
    height: 28,
    width: 500,
    marginTop: 3,
    marginLeft: 20,
    fontSize: 15,
    marginRight: 35,
  },
  eventNameColumn: {
    width: 133,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 28,
    height: 40,
    width: 40,
    marginLeft: 330,
    marginTop: 5,
  },
  eventNameColumnRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 18,
    marginRight: 28,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
  },

  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 10,
  },
  loginText1: {
    marginLeft: 100,
    marginTop: 10,
    fontSize: 28,
    color: "#151B54",
    fontWeight: "bold",
  },
  tinyLogo1: {
    width: 470,
    height: 200,
    marginLeft: -15,
  },
});
