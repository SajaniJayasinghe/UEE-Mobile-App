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
    };
    setorganization(data);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.event1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
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
            height: 250,
            width: 350,
            marginLeft: 25,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  event1: {
    width: 350,
    height: 300,

    marginLeft: 25,

    marginTop: 10,
  },
  materialButtonDark: {
    height: 50,
    width: 160,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 25,
    marginLeft: 220,
    marginBottom: 15,
  },

  addnewblog: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
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
});

export default SpecificOrganization;
