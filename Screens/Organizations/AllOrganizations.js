import axios from "axios";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import Icons from "react-native-vector-icons/Entypo";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";

export default function AllOrganizations({ navigation }) {
  const [organization, setorganization] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://life-below-water.herokuapp.com/api/organization/getorganization"
      )
      .then((res) => {
        if (res.data.success) {
          setorganization(res.data.existingOrganizations);
        }
      });
  }, []);

  const deleteorganization = async (id) => {
    Alert.alert(
      "Are you sure?",
      "This will permanently delete the organization!",
      [
        {
          text: "OK",
          onPress: async () => {
            console.log(id);
            axios
              .delete(
                `https://life-below-water.herokuapp.com/api/organization/delete/${id}`
              )
              .then((res) => {
                navigation.push("AllOrganizations");
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
      ],
      { cancelable: true }
    );
  };

  let generatePdf = async (organizationName, description) => {
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
   
    <h2 style="text-align:center">Organization Details  </h2>
   
    <div class="card">
    <img src="https://images7.alphacoders.com/678/678600.jpg" alt="John" style="width:100%">
      <h1>Organization :${organizationName} </h1>
      <p class="title"> </p>
      <p>Description: ${description}</p>
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

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.creativefabrica.com/wp-content/uploads/2020/05/09/Illustration-of-Student-Learning-Graphics-4074904-1.jpg",
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://res.cloudinary.com/nibmsa/image/upload/v1667592233/Rectangle_6_xzuyuq.png",
        }}
      />
      <Text
        style={{
          fontWeight: "900",
          textAlign: "center",
          fontSize: 24,
          marginTop: 220,
          marginLeft: 20,
        }}
      >
        All Organizations
      </Text>

      <TouchableOpacity
        style={[styles.containerx1, styles.materialButtonDark1]}
        onPress={() => navigation.navigate("AddOrganization")}
      >
        <Text>Create</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
          {organization.map((organization, index) => (
            <View key={organization + index}>
              <Card
                style={{
                  padding: 7,
                  width: 390,
                  margin: 10,
                  marginLeft: -10,
                  height: 130,
                  borderRadius: 25,
                }}
              >
                <View>
                  <Text
                    style={{
                      marginVertical: 5,
                      fontSize: 20,
                      flexDirection: "row",
                      marginLeft: 20,
                      marginTop: 20,
                      justifyContent: "flex-end",
                    }}
                  >
                    {organization.organizationName}
                  </Text>
                </View>

                <View
                  style={{
                    paddingBottom: 20,
                    marginTop: -35,
                    paddingRight: 20,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Icons
                    name="print"
                    style={styles.icon7}
                    title="Generate PDF"
                    onPress={() =>
                      generatePdf(
                        organization.organizationName,
                        organization.organizationImage,
                        organization.description
                      )
                    }
                  ></Icons>

                  <TouchableOpacity
                    style={{ marginLeft: 5, marginTop: 4 }}
                    onPress={() =>
                      navigation.navigate("EditOrganizaton", {
                        id: organization._id,
                        organizationName: organization.organizationName,
                        organizationImage: organization.organizationImage,
                        description: organization.description,
                      })
                    }
                  >
                    <Icon name="edit" size={20} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: 10, marginTop: 4 }}
                    onPress={() => deleteorganization(organization._id)}
                  >
                    <Icona
                      name="delete"
                      size={23}
                      color="black"
                      style={{ marginLeft: 5 }}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[styles.containerx, styles.ButtonDark]}
                  onPress={() =>
                    navigation.navigate("AddEvent", {
                      id: organization._id,
                      organizationName: organization.organizationName,
                    })
                  }
                >
                  <Text
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 12,
                    }}
                  >
                    {"  "}
                    ADD EVENT
                  </Text>
                </TouchableOpacity>
              </Card>
            </View>
          ))}
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
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: -300,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 20,
  },
  logo: {
    width: 430,
    height: 300,
    marginTop: -10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  log: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  log2: {
    width: 375,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
  },
  ButtonDark: {
    height: 36,
    width: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 25,
    marginLeft: 130,
    marginTop: 10,
  },

  containerx: {
    backgroundColor: "#ADDFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 78,
    paddingLeft: 3,
    paddingRight: 3,
  },
  containerx1: {
    backgroundColor: "#C2DFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 26,
    paddingRight: 16,
  },
  materialButtonDark1: {
    height: 38,
    width: 100,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 15,
    marginLeft: 300,
    marginBottom: 15,
  },
  icon7: {
    color: "black",
    fontSize: 20,
    marginTop: 6,
    marginRight: 7,
  },
});
