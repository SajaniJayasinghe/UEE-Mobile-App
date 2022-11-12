import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { Card } from "react-native-shadow-cards";
import Icons from "react-native-vector-icons/Entypo";

export default function ReceivedDonations({ navigation }) {
  const [donations, setdonations] = useState([]);
  const [filterdonations, setfilterdonations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://life-below-water.herokuapp.com/api/donation/getdonation")
      .then((res) => {
        if (res.data.success) {
          setdonations(res.data.existingDonations);
        }
      });
  }, []);

  const searchFunc = (text) => {
    return donations.filter((donations) => donations.donatorName === text);
  };

  useEffect(() => {
    setfilterdonations(searchFunc(search));
  }, [search]);

  let generatePdf = async (eventTitle, donatorName) => {
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
      hight:1000;
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
   
    <h2 style="text-align:center">Donations Details  </h2>
   
    <div class="card">
      <h1> Event Title :${eventTitle} </h1>
      <p class="title"> </p>
      <p>Donator Name: ${donatorName}</p>
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

  const deletedonation = async (id) => {
    Alert.alert("Are you sure?", "This will permanently delete donation!", [
      {
        text: "OK",
        onPress: async () => {
          console.log(id);
          axios
            .delete(
              `https://life-below-water.herokuapp.com/api/donation/deletedonation/${id}`
            )
            .then((res) => {
              navigation.push("ReceivedDonations");
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
          uri: "https://www.hkcompanyregistration.com/wp-content/uploads/2020/07/networking-for-jobs-in-hongkong.jpg",
        }}
      />
      <Text style={styles.loginText1}>Received Donations</Text>
      <TextInput
        style={styles.inputserach}
        placeholder="Search for Donator name"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
          {(search === "" ? donations : filterdonations).map(
            (donations, index) => (
              <View key={donations + index}>
                <Card
                  style={{
                    padding: 7,
                    margin: 10,
                    marginLeft: -10,
                    height: 100,
                    borderRadius: 25,
                    backgroundColor: "#EBF4FA",
                  }}
                >
                  <Text style={styles.eventName}>
                    Event Name : {donations.eventTitle}
                  </Text>
                  <Text style={styles.donation}>
                    Donator name : {donations.donatorName}
                  </Text>
                  <Icon
                    name="delete-forever"
                    onPress={() => deletedonation(donations._id)}
                    style={styles.icon}
                  ></Icon>
                  <Icons
                    name="print"
                    style={styles.icon7}
                    title="Generate PDF"
                    onPress={() =>
                      generatePdf(donations.eventTitle, donations.donatorName)
                    }
                  ></Icons>
                </Card>
              </View>
            )
          )}
        </View>
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
  icon7: {
    color: "black",
    fontSize: 20,
    marginLeft: 300,
    marginTop: -36,
  },
  rect1: {
    width: 384,
    height: 86,

    marginTop: -30,
    position: "absolute",
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
    marginLeft: 20,
    marginTop: 20,
  },
  eventName: {
    color: "#121212",
    height: 24,
    width: 500,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    marginRight: 35,
  },
  donation: {
    color: "#121212",
    height: 28,
    width: 500,
    marginTop: 3,
    marginLeft: 20,
    fontSize: 15,
    marginRight: 35,
  },
  eventNameColumn: {
    width: 133,
  },
  icon: {
    color: "#8B0000",
    fontSize: 28,
    height: 40,
    width: 40,
    marginLeft: 330,
    marginTop: -15,
  },
  eventNameColumnRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 18,
    marginRight: 28,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
  },

  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 10,
  },
  loginText1: {
    marginLeft: 100,
    marginTop: 10,
    fontSize: 28,
    color: "#151B54",
    fontWeight: "bold",
  },
  tinyLogo1: {
    width: 470,
    height: 200,
    marginLeft: -15,
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
    height: 40,
    borderWidth: 1,
  },
});
