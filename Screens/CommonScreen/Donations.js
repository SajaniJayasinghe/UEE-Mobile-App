import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
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
    height: 60,
    marginLeft: -15,
    marginTop: 0,
  },
});
