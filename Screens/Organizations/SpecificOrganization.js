import React, { useEffect, useState } from "react";
import { Card } from "react-native-shadow-cards";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const SpecificOrganization = ({ navigation }) => {
  const [organization, setorganization] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const data = {
      organizationName: route.params.organizationName,
      description: route.params.description,
      organizationID: route.params.organizationID,
      organizationImage: route.params.organizationImage,
    };
    setorganization(data);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Image
        style={styles.event1}
        source={{ uri: organization.organizationImage }}
      />
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {organization.organizationName}
      </Text>

      <TouchableOpacity
        style={[styles.containerx, styles.materialButtonDark]}
        onPress={() =>
          navigation.navigate("Members", {
            id: organization.organizationID,
            organizationName: organization.organizationName,
          })
        }
      >
        <Text style={styles.addnewblog}>Members</Text>
      </TouchableOpacity>

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Card
          style={{
            padding: 30,
            margin: 15,
            height: 350,
            width: 398,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {organization.description}
          </Text>
        </Card>
      </ScrollView>
      <Image
        style={styles.tinyLogo4}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  event1: {
    width: 430,
    height: 230,
  },
  materialButtonDark: {
    height: 30,
    width: 118,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 15,
    marginLeft: 280,
  },

  addnewblog: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
  },

  containerx: {
    backgroundColor: "#C2DFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16,
  },
  tinyLogo: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: -10,
  },
});

export default SpecificOrganization;
