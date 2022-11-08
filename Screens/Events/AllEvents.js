import React from "react";
import { Card } from "react-native-shadow-cards";
import SearchBar from "react-native-dynamic-search-bar";
import Icon from "react-native-vector-icons/AntDesign";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const AllEvents = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#151B54",
          textAlign: "center",
          marginTop: 30,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        EVENTS LIST
      </Text>

      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        backgroundColor="#DBE9FA"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity onPress={() => navigation.navigate("donate")}>
          <Card style={{ padding: 100, margin: 25, height: 150, width: 350 }}>
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 0,
                marginBottom: -30,
                fontSize: 25,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Donations
            </Text>

            <Icon
              name="eye"
              size={30}
              color="#900"
              style={{ marginLeft: 160 }}
            />
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllEvents;
