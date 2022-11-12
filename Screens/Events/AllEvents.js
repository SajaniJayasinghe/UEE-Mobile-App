import React, { useEffect, useState } from "react";
import { Card } from "react-native-shadow-cards";
import SearchBar from "react-native-dynamic-search-bar";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function AllEvents({ navigation }) {
  const [event, setEvent] = useState([]);
  const [filterevents, setfilterevents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/event/getallevents")
      .then((res) => {
        if (res.data.success) {
          setEvent(res.data.existingEvents);
        }
      });
  }, []);

  const searchFunc = (text) => {
    return event.filter((event) => event.eventTitle === text);
  };

  useEffect(() => {
    setfilterevents(searchFunc(search));
  }, [search]);

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
          uri: "https://cdni.iconscout.com/illustration/premium/thumb/business-woman-planning-events-deadlines-and-agenda-3611245-3126414.png",
        }}
      />

      <Text
        style={{
          color: "#151B54",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        EVENTS LIST
      </Text>

      <TextInput
        style={styles.inputserach}
        placeholder="Search for Event Name"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {(search === "" ? event : filterevents).map((event, index) => (
          <View key={event + index}>
            <Card
              style={{
                padding: 20,
                margin: 10,
                height: 100,
                width: 390,
                marginLeft: 15,
                borderRadius: 25,
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
              ></Text>
              <Text
                style={{
                  marginTop: -20,
                  marginBottom: 10,
                }}
              >
                Event : {event.eventTitle}
              </Text>

              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              ></Text>
              <Text
                style={{
                  marginTop: -20,
                }}
              >
                Organization : {event.organizationName}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SpecificEventUser", {
                    id: event._id,
                    eventTitle: event.eventTitle,
                    venue: event.venue,
                    eventTime: event.eventTime,
                    eventDate: event.eventDate,
                    eventdescription: event.eventdescription,
                    eventImage: event.eventImage,
                  })
                }
              >
                <Icon
                  name="eye"
                  size={30}
                  color="black"
                  style={{ marginLeft: 320, marginTop: -30 }}
                />
              </TouchableOpacity>
            </Card>
          </View>
        ))}
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
  tinyLogo: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 430,
    height: 200,
    marginLeft: 10,
    marginBottom: -35,
    marginTop: 0,
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
    marginLeft: 35,
    marginBottom: 20,
    height: 40,
    borderWidth: 1,
  },
});
