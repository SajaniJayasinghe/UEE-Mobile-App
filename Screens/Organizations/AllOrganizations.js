import axios from "axios";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Icona from "react-native-vector-icons/AntDesign";
import { Card } from "react-native-shadow-cards";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

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
        source={require("../../assets/organization.webp")}
      />
      <Text
        style={{
          fontWeight: "900",
          textAlign: "center",
          fontSize: 26,
          marginTop: 10,
        }}
      >
        All Organizations
      </Text>

      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => navigation.navigate("AddOrganization")}
      >
        <Text style={styles.addnewblog}>Create</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
          {organization.map((organization, index) => (
            <View key={organization + index}>
              <Card
                style={{
                  padding: 30,
                  margin: 12,
                  marginLeft: -5,
                  marginTop: -20,
                  borderRadius: 25,
                  marginBottom: 40,
                }}
              >
                <View
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      marginVertical: 5,
                      fontSize: 20,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    {organization.organizationName}
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    marginLeft: 100,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.navigate("EditOrganizaton")}
                  >
                    <Icon name="edit" size={30} color="black" />
                  </TouchableOpacity>
                  {/* </View>
              <View
                style={{
                  marginLeft: 100,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              > */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ForiegnPassengerDashboard")
                    }
                  >
                    <Icona
                      name="delete"
                      size={30}
                      color="black"
                      style={{ marginLeft: 5 }}
                    />
                  </TouchableOpacity>
                  {/* </View>
            <View
              style={{
                marginLeft: 100,
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            > */}
                  <TouchableOpacity
                    style={[styles.containerx, styles.ButtonDark]}
                    onPress={() =>
                      navigation.navigate("AddEvent", {
                        organizationID: organization.organizationID,
                        organizationName: organization.organizationName,
                      })
                    }
                  >
                    <Text
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      {"  "}
                      ADD EVENT
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          ))}
        </View>
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
  logo: {
    width: 430,
    height: 200,
    marginTop: -100,
    alignItems: "center",
    flexDirection: "row",
  },
  // log: {
  //   width: 350,
  //   height: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 30,
  //   flexDirection: "row",
  // },
  // log2: {
  //   width: 375,
  //   height: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: -10,
  //   marginLeft: -10,
  //   flexDirection: "row",
  // },
  tinyLogo: {
    width: 450,
    height: 50,
    marginLeft: -15,
  },
  // ButtonDark: {
  //   height: 40,
  //   width: 90,
  //   borderRadius: 100,
  //   shadowOffset: {
  //     width: 3,
  //     height: 3,
  //   },
  //   elevation: 5,
  //   shadowOpacity: 1,
  //   shadowRadius: 0,
  //   marginTop: 10,
  //   marginLeft: 320,
  //   marginBottom: 10,
  // },
  // containerx: {
  //   marginTop: -20,
  //   backgroundColor: "#79BAEC",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   elevation: 2,
  //   minWidth: 88,
  //   paddingLeft: 20,
  //   paddingRight: 16,
  // },
  ButtonDark1: {
    height: 40,
    width: 120,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: -110,
    marginBottom: -40,
  },
  containerx1: {
    marginTop: -20,
    backgroundColor: "#BDEDFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 88,
    paddingLeft: 20,
    paddingRight: 16,
  },
  logo: {
    width: 430,
    height: 300,
    marginTop: 10,
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
    height: 40,
    width: 20,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 5,
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
    height: 50,
    width: 160,
    borderRadius: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 25,
    marginLeft: 220,
    marginBottom: 15,
  },
});
