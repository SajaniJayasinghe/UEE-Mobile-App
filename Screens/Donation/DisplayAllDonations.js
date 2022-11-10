import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";

export default function DisplayAllDonations({ navigation }) {
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
      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        style={{
          borderWidth: 1,
          marginBottom: 10,
          marginTop: 10,
        }}
        onChangeText={(text) => console.log(text)}
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
        {donations.map((donations, index) => (
          <View style={styles.bus2} key={donations + index}>
            <Card style={{ padding: 10, margin: 21, marginTop: 0 }}>
              <LinearGradient
                colors={["#79BAEC", "#C2DFFF"]}
                style={styles.log2}
              >
                <Text
                  style={{
                    marginVertical: 2,
                    fontSize: 25,
                    marginLeft: -260,
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
            </Card>
          </View>
        ))}
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
    width: 389,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
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
