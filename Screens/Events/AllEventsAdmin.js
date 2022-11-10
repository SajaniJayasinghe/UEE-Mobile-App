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
} from "react-native";

export default function AllEventsAdmin({ navigation }) {
  const [event, setEvent] = useState([]);
  // const eventA = (x) => {
  //   console.log(x);
  // };

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/event/getallevents")
      .then((res) => {
        if (res.data.success) {
          setEvent(res.data.existingEvents);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
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
      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        style={{
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => console.log(text)}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {event.map((event, index) => (
          <View key={event + index}>
            <Card
              style={{
                padding: 20,
                margin: 10,
                height: 100,
                width: 400,
                marginLeft: 15,
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                Event : {event.eventTitle}
              </Text>

              <Text
                style={{
                  color: "#000000",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Organization : {event.organizationName}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SpecificEventAdmin", { id: event._id })
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
        style={styles.tinyLogo4}
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
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 20,
  },
});
