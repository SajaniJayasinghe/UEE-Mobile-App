import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function UserDashboard({ navigation }) {
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
        // source={{
        //   uri: "https://images4.alphacoders.com/968/968510.jpg",
        // }}
        source={require("../../assets/userdashboard.jpeg")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
        <Icon name="user-circle" style={styles.icon}></Icon>
      </TouchableOpacity>

      <View style={styles.rect3Row}>
        <View style={styles.rect3}>
          <TouchableOpacity onPress={() => navigation.navigate("Organization")}>
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
          </TouchableOpacity>
        </View>
        <View style={styles.rect4}>
          <TouchableOpacity onPress={() => navigation.navigate("AllEvents")}>
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
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Events
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rect5Row}>
        <View style={styles.rect5}>
          <TouchableOpacity onPress={() => navigation.navigate("Blogs")}>
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
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
            >
              Blogs
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect6}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DisplayAllDonation")}
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
          </TouchableOpacity>
        </View>
      </View>

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
  icon: {
    color: "#ffff",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 380,
  },

  tinyLogo: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 470,
    height: 250,
    marginLeft: -15,
    marginBottom: -300,
  },
  tinyLogo5: {
    width: 170,
    height: 140,
    marginBottom: -20,
    marginTop: 2,
    borderRadius: 25,
    marginLeft: 3,
  },
  tinyLogo6: {
    width: 130,
    height: 120,
    marginBottom: -20,
    marginTop: 25,
    borderRadius: 25,
    marginLeft: 40,
  },
  tinyLogo7: {
    width: 160,
    height: 120,
    marginBottom: -20,
    marginTop: 25,
    borderRadius: 25,
    marginLeft: 20,
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

  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: -40,
  },
  rect3: {
    width: 194,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    marginTop: -100,
    shadowRadius: 13,
  },
  rect4: {
    width: 194,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    shadowRadius: 13,
    marginLeft: 12,
    marginTop: -100,
  },
  image2: {
    width: 121,
    height: 119,
    marginTop: 36,
    marginLeft: 19,
  },
  rect3Row: {
    height: 200,
    flexDirection: "row",
    marginTop: 364,
    marginLeft: 14,
    marginRight: 22,
    marginBottom: 14,
  },
  rect5: {
    width: 194,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    shadowRadius: 13,
    marginTop: -100,
  },
  rect6: {
    width: 194,
    height: 200,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    shadowColor: "rgba(208,194,194,1)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 39,
    shadowOpacity: 1,
    shadowRadius: 13,
    marginLeft: 12,
    marginTop: -100,
  },
  rect5Row: {
    height: 169,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 14,
    marginRight: 22,
  },
  rect7: {
    width: 393,
    height: 45,
    backgroundColor: "#E6E6E6",
    marginTop: -718,
  },
});
