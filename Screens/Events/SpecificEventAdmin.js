import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function SpecificEventUser({ navigation }) {
  const [specificevent, setSpecificEvent] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const data = {
      eventTitle: route.params.eventTitle,
      organizationID: route.params.organizationID,
      venue: route.params.venue,
      eventTime: route.params.eventTime,
      eventDate: route.params.eventDate,
      eventdescription: route.params.eventdescription,
    };
    setSpecificEvent(data);
  }, []);

  const deleteevent = async () => {
    const { id } = route.params;

    Alert.alert(
      "Are you sure?",
      "This will permanently delete the event!",
      [
        {
          text: "OK",
          onPress: async () => {
            console.log(id);
            axios
              .delete(
                `https://life-below-water.herokuapp.com/api/event/deleteevent/${id}`
              )
              .then((res) => {
                navigation.push("AllEventsAdmin");
              })
              .catch((e) => {
                console.error(e);
              });
          },
        },
      ],
      { cancelable: true }
    );
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

      <TouchableOpacity onPress={() => deleteevent(specificevent._id)}>
        <Icona
          name="delete"
          size={24}
          color="#900"
          style={{ marginLeft: 370 }}
        />
      </TouchableOpacity>

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Card
          style={{
            padding: 60,
            height: 380,
            width: 400,
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 13,
            borderRadius: 25,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("EditEvent")}>
            <Icon
              name="edit"
              size={25}
              color="#900"
              style={{
                marginLeft: 100,
                marginTop: -50,
                marginLeft: 250,
                marginBottom: 20,
              }}
            />
          </TouchableOpacity>
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
    width: 100,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: 310,
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
