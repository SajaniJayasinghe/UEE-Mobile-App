import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "react-native-dynamic-search-bar";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function Organizations({ navigation }) {
  const [organization, setorganization] = useState([]);
  const [filterorganization, setfilterorganization] = useState([]);
  const [search, setSearch] = useState("");

  const searchFunc = (text) => {
    return organization.filter(
      (organization) => organization.organizationName === text
    );
  };

  useEffect(() => {
    setfilterorganization(searchFunc(search));
  }, [search]);

  const image = {
    uri: "https://assets.puzzlefactory.pl/puzzle/193/194/original.jpg",
  };

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
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Text
        style={{
          fontWeight: "900",

          textAlign: "center",
          fontSize: 26,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Organizations
      </Text>
      <TextInput
        style={styles.inputserach}
        placeholder="Search for Organization name"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {(search === "" ? organization : filterorganization).map(
          (organization, index) => (
            <View key={organization + index}>
              <TouchableOpacity
                style={styles.containerx}
                onPress={() =>
                  navigation.navigate("SpecificOrganization", {
                    organizationID: organization._id,
                    organizationName: organization.organizationName,
                    description: organization.description,
                    organizationImage: organization.organizationImage,
                  })
                }
                // source={{
                //   uri: "https://previews.123rf.com/images/scusi/scusi1309/scusi130900039/22719918-city-travel-by-bus.jpg",
                // }}
              >
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.image}
                ></ImageBackground>
                <View
                  style={{
                    padding: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.text}>
                    {organization.organizationName}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            // </View>
          )
        )}
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  tinyLogo: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  logo: {
    width: 430,
    height: 300,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 0,
    marginBottom: -10,
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

  containerx: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -20,
    elevation: 0,
  },
  text: {
    fontSize: 20,
    fontColor: "black",
    opacity: 1,
    top: -60,
  },
  image: {
    height: 70,
    width: 350,
    borderRadius: 50,
    overflow: "hidden",
    opacity: 0.25,
    marginTop: 25,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
    marginLeft: 5,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
  },
});
