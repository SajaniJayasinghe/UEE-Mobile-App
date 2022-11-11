import axios from "axios";
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

export default function SpecificEventUser({ navigation }) {
  const [specificevent, setSpecificEvent] = useState([]);
  const route = useRoute();
  const { id } = route.params;

  useEffect(() => {
    const data = {
      eid: route.params.id,
      eventTitle: route.params.eventTitle,
      venue: route.params.venue,
      eventTime: route.params.eventTime,
      eventDate: route.params.eventDate,
      eventdescription: route.params.eventdescription,
    };
    setSpecificEvent(data);
    console.log(data);
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
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />
      <Text
        style={{
          color: "#000000",
          marginTop: 20,
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {specificevent.eventTitle}
      </Text>
      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() =>
          navigation.navigate("AddDonations", {
            eid: specificevent.eid,
          })
        }
      >
        <Text style={styles.loginText3}>Donate</Text>
      </TouchableOpacity>

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Card
          style={{
            padding: 60,
            height: 380,
            width: 390,
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 14,
            borderRadius: 25,
          }}
        >
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: -30,
              fontSize: 15,
              marginLeft: -20,
              fontWeight: "bold",
            }}
          >
            Event Date : {specificevent.eventDate}
          </Text>
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 10,
              fontSize: 15,
              textAlign: "justify",
              marginLeft: -20,
              fontWeight: "bold",
            }}
          >
            Event Time :{specificevent.eventTime}
          </Text>
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 10,
              fontSize: 15,
              textAlign: "justify",
              marginLeft: -20,
              fontWeight: "bold",
            }}
          >
            Venue :{specificevent.venue}
          </Text>
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 20,
              fontSize: 15,
              marginLeft: -20,
              textAlign: "justify",
              fontWeight: "bold",
            }}
          >
            Description :
          </Text>
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 10,
              fontSize: 15,
              marginLeft: 5,
              textAlign: "justify",
            }}
          >
            {" "}
            {specificevent.eventdescription}
          </Text>
        </Card>
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
  event1: {
    width: 550,
    height: 200,
    marginLeft: -99,
    marginTop: 0,
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
  tinyLogo: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 0,
  },
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
  ButtonDark: {
    height: 30,
    width: 120,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: 270,
  },
  containerx: {
    marginTop: -20,
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
    paddingLeft: 26,
    paddingRight: 16,
  },
});
