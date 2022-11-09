import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function EditOrganizaton({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://previews.123rf.com/images/scusi/scusi1309/scusi130900039/22719918-city-travel-by-bus.jpg",
        }}
      />
      <Text
        style={{
          color: "#000080",
          textAlign: "center",
          marginTop: 5,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        SMART LINE TRAVELS
      </Text>
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 25,
          fontSize: 28,
          marginBottom: 30,
          marginLeft: 10,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Edit Organization
      </Text>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Organization Name"
          style={styles.textView}
          // onChange={(e) => setEmail(e.nativeEvent.text)}
          // value={email}
          placeholder="    Organization Name"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Description"
          style={styles.textView}
          // onChange={(e) => setEmail(e.nativeEvent.text)}
          // value={email}
          placeholder="    Description"
        />
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() => navigation.navigate("AllOrganizations")}
      >
        <Text style={styles.signUpbtn}> Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textView: {
    marginLeft: 20,
    height: 40,
    padding: 10,
    marginLeft: 35,
    marginTop: 15,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: "#DBE9FA",
    textAlign: "left",
  },
  no1: {
    color: "rgba(155,155,155,1)",
    fontSize: 29,
    marginTop: 4,
  },

  logo: {
    width: 425,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerbtn: {
    backgroundColor: "#79BAEC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonDark: {
    height: 35,
    width: 150,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 20,
    marginLeft: 135,
  },
});
