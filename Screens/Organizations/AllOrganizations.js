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
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "900",
          // opacity: 0.6,
          textAlign: "center",
          fontSize: 26,
          marginTop: 10,
        }}
      >
        All Organizations
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://thumbs.dreamstime.com/b/illustration-travel-tour-bus-mountain-range-background-copy-space-30257089.jpg",
        }}
      />

      <TouchableOpacity
        style={[styles.containerx1, styles.materialButtonDark1]}
        onPress={() => navigation.navigate("AddOrganization")}
      >
        <Text style={styles.addnewblog}>Create</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
          {organization.map((organization, index) => (
            <View key={organization + index}>
              <View>
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
                  paddingBottom: 30,
                  marginTop: -40,
                  marginLeft: 100,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() =>
                    navigation.navigate("EditOrganizaton", {
                      organizationName: organization.organizationName,
                      organizationImage: organization.organizationImage,
                      description: organization.description,
                    })
                  }
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
                  onPress={() => deleteorganization(organization._id)}
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
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
