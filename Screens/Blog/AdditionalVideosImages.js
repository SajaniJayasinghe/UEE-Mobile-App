import React from "react";

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Card,
} from "react-native";

const AdditionalVideosImages = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tiny}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Text
        style={{
          color: "#151B54",
          textAlign: "center",
          marginTop: 20,
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        Additional Videos and Images
      </Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity onPress={() => navigation.navigate("UpdateList")}>
          <Image
            style={styles.blog1}
            source={{
              uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
            }}
          />
          <Text
            style={{
              color: "#151B54",
              textAlign: "center",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            https://youtu.be/RJc8PQNPyvE
          </Text>
          <Image
            style={styles.blog2}
            source={{
              uri: "https://oceana.org/wp-content/uploads/sites/18/cephalopods.jpg",
            }}
          />
          <Text
            style={{
              color: "#151B54",
              textAlign: "center",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            https://youtu.be/RJc8PQNPyvE
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tiny: {
    width: 470,
    height: 100,
    marginLeft: -15,
    marginTop: -50,
  },
  blog1: {
    width: 350,
    height: 300,
    marginLeft: 29,
    marginTop: -70,
  },
  blog2: {
    width: 350,
    height: 240,
    marginLeft: 29,
    marginTop: 30,
  },
});

export default AdditionalVideosImages;
