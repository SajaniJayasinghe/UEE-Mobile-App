import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function EditEvent({ navigation }) {
  const [events, setevents] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventdescription, setDescription] = useState("");
  const [eventID, seteventID] = useState("");
  const route = useRoute();

  useEffect(() => {
    seteventID(route.params.eID);
    setEventTitle(route.params.eventTitle);
    setVenue(route.params.venue);
    setEventTime(route.params.eventTime);
    setEventDate(route.params.eventDate);
    setDescription(route.params.eventdescription);
  }, []);

  console.log(eventID);

  const updateEvent = () => {
    const URL = `https://life-below-water.herokuapp.com/api/event/updateevent/${eventID}`;

    const payload = {
      eventTitle: eventTitle,
      venue: venue,
      eventTime: eventTime,
      eventDate: eventDate,
      eventdescription: eventdescription,
    };
    console.log(payload);
    axios
      .put(URL, payload)
      .then((res) => {
        Alert.alert(
          "Event Updated",
          "Your Event has updated successfully!!",
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
          "Updating Unsuccessful",
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
        source={require("../../assets/Advantage-1.png")}
      />
      <Text
        style={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: 26,
          marginLeft: -10,
          marginTop: 20,
          marginBottom: 24,
        }}
      >
        Update Event
      </Text>
      {/* <ScrollView> */}
      <View>
        <Text style={{ marginLeft: 40, fontSize: 18 }}>Event Title</Text>
        <TextInput
          placeholder="Enter Event Title"
          style={styles.textInput2}
          value={eventTitle}
          onChange={(e) => setEventTitle(e.nativeEvent.text)}
        ></TextInput>

        <Text style={{ marginLeft: 40, fontSize: 18 }}>Event Venue</Text>
        <TextInput
          placeholder="Enter Event Title"
          style={styles.textInput2}
          value={venue}
          onChange={(e) => setVenue(e.nativeEvent.text)}
        ></TextInput>
        <Text style={{ marginLeft: 40, fontSize: 18 }}>Event Time</Text>
        <TextInput
          placeholder="Enter Event Title"
          style={styles.textInput2}
          value={eventTime}
          onChange={(e) => setEventTime(e.nativeEvent.text)}
        ></TextInput>
        <Text style={{ marginLeft: 40, fontSize: 18 }}>Event Date</Text>
        <TextInput
          placeholder="Enter Event Title"
          style={styles.textInput2}
          value={eventDate}
          onChange={(e) => setEventDate(e.nativeEvent.text)}
        ></TextInput>
        <Text style={{ marginLeft: 40, fontSize: 18 }}>Description</Text>
        <TextInput
          placeholder="Enter Event Title"
          style={styles.textInput2}
          value={eventdescription}
          onChange={(e) => setDescription(e.nativeEvent.text)}
        ></TextInput>
      </View>
      {/* </ScrollView> */}
      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          updateEvent();
        }}
      >
        <Text style={styles.letsGetStarted}> UPDATE</Text>
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
  textInput2: {
    height: 40,
    width: 340,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    marginTop: 0,
    marginLeft: 35,
    marginBottom: 10,
    borderRadius: 25,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
  },
  loginlogo: {
    width: 440,
    height: 300,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: -35,
  },
  logo1: {
    width: 300,
    height: 60,
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
    marginTop: 10,
    marginBottom: 90,
  },
  containerx: {
    backgroundColor: "#ADDFFF",
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
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 140,
    flexDirection: "row",
  },
  letsGetStarted: {
    fontSize: 18,
    marginLeft: 40,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
    marginBottom: 15,
  },
  tinyLogo1: {
    width: 450,
    height: 100,
    marginLeft: -15,
    marginTop: -65,
  },
  logo: {
    width: 440,
    height: 200,
    marginTop: -20,
    marginLeft: 0,
    alignItems: "center",
    flexDirection: "row",
  },
});
