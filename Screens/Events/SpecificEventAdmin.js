import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Entypo";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function SpecificEventUser({ navigation }) {
  const [specificevent, setSpecificEvent] = useState([]);
  const route = useRoute();

  useEffect(() => {
    const data = {
      eid: route.params.eID,
      eventTitle: route.params.eventTitle,
      organizationID: route.params.organizationID,
      venue: route.params.venue,
      eventTime: route.params.eventTime,
      eventDate: route.params.eventDate,
      eventdescription: route.params.eventdescription,
      eventImage: route.params.eventImage,
    };

    setSpecificEvent(data);
  }, []);

  const deleteevent = async () => {
    const { id } = route.params;

    Alert.alert("Are you sure?", "This will permanently delete the event!", [
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
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
    ]);
  };

  let generatePdf = async (
    eventTitle,
    venue,
    eventTime,
    eventDate,
    eventdescription
  ) => {
    const html = `
 
    <html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: auto;
      text-align: center;
      font-family: arial;
      hight:800;
   width:300;
    }
   
    .title {
      color: grey;
      font-size: 18px;
    }
   
    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
   
    a {
      text-decoration: none;
      font-size: 22px;
      color: black;
    }
   
    button:hover, a:hover {
      opacity: 0.7;
    }
    </style>
    </head>
    <body>
   
    <h2 style="text-align:center">Event Details  </h2>
   
    <div class="card">
      <h1> Event Title :${eventTitle} </h1>
      <p class="title"> </p>
      <p>Venue: ${venue}</p>
      <h1> Event Time :${eventTime} </h1>
      <p class="title"> </p>
      <h1> Event Date :${eventDate} </h1>
      <p class="title"> </p>
      <h1> Event Description :${eventdescription} </h1>
      <p class="title"> </p>
      <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a>
      </div>
    </div>
   
    </body>
    </html>
   
`;

    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Image style={styles.event1} source={{ uri: specificevent.eventImage }} />

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
        onPress={() =>
          navigation.navigate("EditEvent", {
            eID: specificevent.eid,
            eventTitle: specificevent.eventTitle,
            venue: specificevent.venue,
            eventTime: specificevent.eventTime,
            eventDate: specificevent.eventDate,
            eventdescription: specificevent.eventdescription,
          })
        }
      >
        <Icon
          name="edit"
          size={23}
          color="#900"
          style={{ marginLeft: 320, marginTop: 20 }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteevent(specificevent._id)}>
        <Icona
          name="delete"
          size={24}
          color="#900"
          style={{ marginLeft: 370, marginTop: -25 }}
        />
      </TouchableOpacity>

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Card
          style={{
            padding: 60,
            height: 380,
            width: 390,
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 13,
            borderRadius: 25,
          }}
        >
          <Icons
            name="print"
            style={styles.icon7}
            title="Generate PDF"
            onPress={() =>
              generatePdf(
                specificevent.eventTitle,
                specificevent.eventTime,
                specificevent.eventDate,
                specificevent.eventdescription
              )
            }
          ></Icons>
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 50,
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
              marginLeft: -10,
              textAlign: "justify",
            }}
          >
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
  icon7: {
    color: "black",
    fontSize: 20,
    // marginLeft: 300,
    // marginTop: -26,
    marginLeft: 250,
    marginTop: -40,
    marginBottom: -30,
  },
});
