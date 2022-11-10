import React, { useEffect, useState } from "react";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";
import axios from "axios";

import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

export default function SpecificEventAdmin({ navigation }) {
  const [events, setevents] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://life-below-water.herokuapp.com/api/event/getoneevent/${eventID}`
      )
      .then((res) => {
        if (res.data.success) {
          setSpecificEvent(res.data.events);
        }
      });
    setevents(data);
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      <Image
        style={styles.event1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />

      <Icon name="edit" size={30} color="#900" style={{ marginLeft: 100 }} />

      <Icona name="delete" size={30} color="#900" style={{ marginLeft: 260 }} />

      {events.map((events, index) => (
        <View key={events + index}>
          <Text
            style={{
              color: "#000000",
              textAlign: "left",
              marginTop: 10,
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {events.eventTitle}
          </Text>
          <ScrollView style={{ display: "flex", flexDirection: "column" }}>
            <Card style={{ padding: 100, margin: 25, height: 400, width: 350 }}>
              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {events.eventVenue}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {events.eventDate}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {events.eventTime}
              </Text>
              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {events.description}
              </Text>
            </Card>
          </ScrollView>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  event1: {
    width: 350,
    height: 150,
    marginLeft: -99,
    marginTop: -100,
  },
});
