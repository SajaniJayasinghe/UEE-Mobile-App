import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ReceivedDonations({ navigation }) {
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
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={styles.rect1}>
          <View style={styles.eventNameColumnRow}>
            <View style={styles.eventNameColumn}>
              <Text style={styles.eventName}>Event Name</Text>
              <Text style={styles.donation}>Donation</Text>
            </View>
            <Icon name="delete-forever" style={styles.icon}></Icon>
          </View>
        </View>
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
    width: 354,
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
    // top: 363,
    marginLeft: 40,
    marginTop: 20,
  },
  eventName: {
    color: "#121212",
    height: 24,
    width: 113,
    marginLeft: 20,
    marginTop: 10,
  },
  donation: {
    color: "#121212",
    height: 28,
    width: 133,
    marginTop: 8,
    marginLeft: 20,
  },
  eventNameColumn: {
    width: 133,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 28,
    height: 40,
    width: 40,
    marginLeft: 155,
    marginTop: 15,
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
