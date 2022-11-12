import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default function EditOrganizaton({ navigation }) {
  const [organizationName, setOrganizationName] = useState("");
  const [description, setDescription] = useState("");
  const [organizationImage, setOrganizationImage] = useState("");
  const route = useRoute();

  const getOrganization = async () => {
    const organizationID = route.params.id;

    await axios
      .get(
        `https://life-below-water.herokuapp.com/api/organization/${organizationID}`
      )
      .then((res) => {
        if (res.data.success) {
          setOrganizationName(res.data.existingOrganizations.organizationName);
          setDescription(res.data.existingOrganizations.description);
          setOrganizationImage(
            res.data.existingOrganizations.organizationImage
          );
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getOrganization();
  }, []);

  const updateUser = () => {
    const organizationID = route.params.id;
    console.log(organizationID);

    const URL = `https://life-below-water.herokuapp.com/api/organization/update/${organizationID}`;

    const payload = {
      organizationName: organizationName,
      description: description,
      organizationImage: organizationImage,
    };

    axios
      .put(URL, payload)
      .then((res) => {
        Alert.alert(
          "Use Profile Updated",
          "Your Profile has updated successfully!!",
          [
            {
              text: "OK",
              onPress: () => navigation.navigate("AdminDashboard"),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Inserting Unsuccessful",
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
        style={styles.logo}
        source={{
          uri: "https://thumbs.dreamstime.com/b/discussion-brainstorming-team-concept-illustration-group-business-people-work-office-meeting-professional-161156918.jpg",
        }}
      />

      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 25,
          fontSize: 28,
          marginBottom: 30,
          marginLeft: 10,
          fontWeight: "bold",
        }}
      >
        Edit Organization
      </Text>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Organization Name"
          style={styles.textView}
          onChange={(e) => setOrganizationName(e.nativeEvent.text)}
          value={organizationName}
          placeholder="    Organization Name"
        />
      </View>
      <View style={styles.no1}>
        <TextInput
          keyboardType=" Description"
          style={styles.textView}
          onChange={(e) => setDescription(e.nativeEvent.text)}
          value={description}
          placeholder="    Description"
        />
      </View>

      <TouchableOpacity
        style={[styles.containerbtn, styles.ButtonDark]}
        onPress={() => {
          updateUser();
        }}
      >
        <Text
          style={{
            fontSize: 18,
          }}
        >
          {" "}
          Update
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.tinyLogo1}
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
  textView: {
    marginLeft: 20,
    height: 50,
    padding: 10,
    marginLeft: 35,
    marginTop: 15,
    width: 350,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 25,
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
    height: 45,
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
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 450,
    height: 60,
    marginLeft: -15,
    marginTop: 200,
  },
});
