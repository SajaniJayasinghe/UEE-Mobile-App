import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function DonationsList({ navigation }) {
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
          uri: "https://static.vecteezy.com/system/resources/previews/005/002/221/original/freelance-woman-online-working-from-home-vector.jpg",
        }}
      />
      <Text style={styles.loginText1}>Donations List</Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={styles.rect1}>
          <View style={styles.eventNameColumnRow}>
            <View style={styles.eventNameColumn}>
              <Text style={styles.eventName}>Event Name</Text>
              <Text style={styles.donation}>Donation</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditDonations")}
            >
              <Icon name="edit" style={styles.icon}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect1: {
    width: 364,
    height: 86,
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
    alignSelf: "center",
    marginTop: 20,
  },
  eventName: {
    color: "#121212",
    height: 24,
    width: 113,
    marginTop: 10,
    marginLeft: 10,
  },
  donation: {
    color: "#121212",
    height: 28,
    width: 133,
    marginTop: 0,
    marginLeft: 10,
  },
  eventNameColumn: {
    width: 133,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 25,
    width: 20,
    marginLeft: 143,
    marginTop: 22,
  },
  eventNameColumnRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 18,
    marginRight: 30,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
  },
  tinyLogo1: {
    width: 470,
    height: 250,
    marginLeft: -15,
  },
  loginText1: {
    marginLeft: 120,
    marginTop: 10,
    fontSize: 28,
    color: "#151B54",
    fontWeight: "bold",
  },
});

export default DonationsList;
