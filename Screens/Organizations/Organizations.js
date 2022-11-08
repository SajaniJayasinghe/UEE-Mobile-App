import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "react-native-dynamic-search-bar";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Organizations({ navigation }) {
  const [organization, setorganization] = useState([]);

  const image = { uri: "https://reactjs.org/logo-og.png" };

  useEffect(() => {
    axios
      .get(
        `https://life-below-water.herokuapp.com/api/organization/getorganization`
      )
      .then((res) => {
        if (res.data.success) {
          setorganization(res.data.existingOrganizations);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "900",
          // opacity: 0.6,
          textAlign: "center",
          fontSize: 26,
          marginTop: 10,
        }}
      >
        Organizations
      </Text>
      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />

      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {organization.map((organization, index) => (
          <View key={organization + index}>
            {/* <View
              style={{
                padding: 5,
                margin: 21,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[styles.containerx, styles.ButtonDark]}
                onPress={() => navigation.navigate("ForiegnPassengerDashboard")}
                // source={{
                //   uri: "https://previews.123rf.com/images/scusi/scusi1309/scusi130900039/22719918-city-travel-by-bus.jpg",
                // }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageBackground
                    // style={styles.logo}
                    source={{
                      uri: "https://previews.123rf.com/images/scusi/scusi1309/scusi130900039/22719918-city-travel-by-bus.jpg",
                    }}
                  />
                  {organization.organizationName}
                </Text> */}
            <TouchableOpacity
              style={[styles.containerx, styles.ButtonDark]}
              onPress={() => navigation.navigate("SpecificOrganization")}
              // source={{
              //   uri: "https://previews.123rf.com/images/scusi/scusi1309/scusi130900039/22719918-city-travel-by-bus.jpg",
              // }}
            >
              <View
                style={{
                  padding: 5,
                  margin: 21,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.text}
                >
                  <Text style={styles.text}>
                    {organization.organizationName}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          // </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
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
    height: 70,
    width: 350,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: 100,
    margin: 5,
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
});
