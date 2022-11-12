import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-shadow-cards";

export default function Dashboard({ navigation }) {
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
          uri: "https://ychef.files.bbci.co.uk/960_540/p07mw81t.jpg",
        }}
      />
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <TouchableOpacity onPress={() => navigation.navigate("AllOrganizations")}>
          <Card
            style={{
              padding: 50,
              marginLeft: 20,
              marginBottom: 30,
            }}
          >
            <Image
              style={styles.tinyLogo5}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591657/tipos_de_organizaciones_-_qu_es-_definicin_y_concepto_2021_economy-wikicom.jpg_kibhno.webp",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 20,
                marginBottom: -30,
                fontSize: 25,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Organization
            </Text>
          </Card>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Events")}> */}
          <Card
            style={{
              padding: 50,
              marginTop: -10,
              marginLeft: 20,
              marginBottom: 30,
            }}
          >
            <Image
              style={styles.tinyLogo6}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591654/events-special-cyan-blue-round-button-isolated-abstract-illustration-105913592_tn4sw0.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 20,
                marginBottom: -30,
                fontSize: 25,
                marginLeft: -20,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Events
            </Text>
          </Card>
        {/* </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("BlogsList")}>
          <Card
            style={{
              padding: 50,
              marginTop: -10,
              marginLeft: 20,
              marginBottom: 30,
            }}
          >
            <Image
              style={styles.tinyLogo7}
              source={{
                uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667591653/creer-un-blog_j6okyn.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 20,
                marginBottom: -30,
                fontSize: 25,
                marginLeft: -20,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Blogs
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ReceivedDonations")}>
          <Card
            style={{
              padding: 50,
              marginTop: -10,
              marginLeft: 20,
              marginBottom: 30,
            }}
          >
            <Image
              style={styles.tinyLogo7}
              source={{
                uri: "https://t3.ftcdn.net/jpg/03/67/50/06/360_F_367500669_mGI3qrf6o3SmsPNKaitUfOPgshAy8Qdk.jpg",
              }}
            />
            <Text
              style={{
                color: "#000000",
                textAlign: "center",
                marginTop: 20,
                marginBottom: -30,
                fontSize: 25,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Donations
            </Text>
          </Card>
        </TouchableOpacity>
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
  loginText: {
    color: "black",
    fontSize: 38,
    lineHeight: 18,
    marginBottom: -20,
    marginLeft: 700,
  },
  tinyLogo: {
    width: 450,
    height: 60,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 470,
    height: 230,
    marginLeft: -15,
    marginBottom: 30,
  },
  tinyLogo5: {
    width: 300,
    height: 140,
    marginBottom: -20,
    marginTop: -40,
    marginLeft: 2,
  },
  tinyLogo6: {
    width: 130,
    height: 120,
    marginBottom: -20,
    marginTop: -40,
    marginLeft: 70,
  },
  tinyLogo7: {
    width: 200,
    height: 100,
    marginBottom: -20,
    marginTop: -40,
    marginLeft: 55,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 44,
  },
  textInput2: {
    height: 40,
    width: 334,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 45,
    marginBottom: 10,
  },
  ButtonDark: {
    height: 50,
    width: 160,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: 120,
  },
  containerx: {
    marginTop: 20,
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
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 20,
  },
});
