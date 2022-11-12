import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";

export default function AddOrganization({ route, navigation }) {
  const [organizationName, setorganizationName] = useState("");
  const [description, setdescription] = useState("");
  const [organizationImage, setorganizationImage] = useState("");
  const neworganization = () => {
    const URL = `https://life-below-water.herokuapp.com/api/organization/addorganization`;

    const payload = {
      organizationName: organizationName,
      description: description,
      organizationImage: organizationImage,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("Organization Added Successfully");
        navigation.navigate("AllOrganizations");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Organization adding Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
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
          uri: "https://images7.alphacoders.com/678/678600.jpg",
        }}
      />
      <Text
        style={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: 26,
          marginLeft: -10,
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Create Organization
      </Text>

      <View>
        <Text
          style={{
            fontWeight: "800",
            //   opacity: 0.6,
            textAlign: "left",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Organization Name
        </Text>
        <TextInput
          keyboardType="Organization Name"
          style={styles.input}
          onChange={(e) => setorganizationName(e.nativeEvent.text)}
          value={organizationName}
        />

        <Text
          style={{
            fontWeight: "800",
            //   opacity: 0.6,
            textAlign: "left",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Description
        </Text>
        <TextInput
          keyboardType="Description"
          style={styles.input2}
          onChange={(e) => setdescription(e.nativeEvent.text)}
          value={description}
        />
        <Text
          style={{
            fontWeight: "800",
            //   opacity: 0.6,
            textAlign: "left",
            fontSize: 20,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Add Image
        </Text>
        <TextInput
          keyboardType="Description"
          style={styles.input3}
          onChange={(e) => setorganizationImage(e.nativeEvent.text)}
          value={organizationImage}
        />
      </View>
      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          neworganization();
        }}
      >
        <Text style={styles.letsGetStarted}> CREATE</Text>
      </TouchableOpacity>
      <Image
        style={styles.tinyLogo2}
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
  input: {
    height: 60,
    margin: 12,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    marginLeft: 20,
    width: 380,
    borderRadius: 25,
  },
  input2: {
    height: 100,
    margin: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    marginLeft: 20,
    width: 290,
    marginBottom: 0,
    width: 380,
    borderRadius: 25,
  },
  input3: {
    height: 50,
    margin: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    marginLeft: 20,
    width: 290,
    marginBottom: -70,
    width: 380,
    borderRadius: 25,
  },
  loginlogo: {
    width: 440,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: -35,
  },
  logo1: {
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    flexDirection: "row",
    marginBottom: 30,
  },

  ButtonDark: {
    height: 50,
    width: 170,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 130,
    marginTop: 100,
    marginBottom: 50,
  },
  containerx: {
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
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: "black",
    marginTop: 5,
  },
  loginText: {
    color: "black",
    fontSize: 19,
  },
  loading: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 140,
    flexDirection: "row",
  },
  letsGetStarted: {
    fontSize: 20,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 450,
    height: 200,
    marginLeft: -15,
    marginTop: -10,
  },
  tinyLogo2: {
    width: 450,
    height: 200,
    marginLeft: -15,
    marginTop: -20,
  },
});
