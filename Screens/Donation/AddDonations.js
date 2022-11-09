import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";

export default function Donations({ route, navigation }) {
  const [donatorName, setdonatorName] = useState("");
  const [depositeDate, setdepositeDate] = useState("");
  const [receipt, setreceipt] = useState("");
  const [amount, setamount] = useState("");
  const [paymenttype, setpaymenttype] = useState("");
  const [value, setValue] = useState(null);

  const data = [
    { label: "Cash", value: "Cash" },
    { label: "Online", value: "Online" },
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  const addDonation = () => {
    const URL = `https://life-below-water.herokuapp.com/api/donation/adddonation/${organizationID}/${eventID}`;

    const payload = {
      donatorName: donatorName,
      depositeDate: depositeDate,
      receipt: receipt,
      amount: amount,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("Donation Added Successfull");
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Donation added Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
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
          uri: "https://cdn1.vectorstock.com/i/1000x1000/73/40/young-woman-sitting-on-the-floor-with-laptop-near-vector-24597340.jpg",
        }}
      />
      <Text
        style={{
          color: "#000000",
          textAlign: "center",
          marginTop: -10,
          marginBottom: 6,
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Times New Roman",
        }}
      >
        Add Donations
      </Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={250}
          labelField="label"
          valueField="value"
          placeholder="Select Payment Type"
          searchPlaceholder="Search..."
          statusBarIsTranslucent={true}
          value={value}
          renderItem={renderItem}
          onChange={(item) => {
            setpaymenttype(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={25}
            />
          )}
        />

        <Text style={styles.loginText}>Name Of Donator</Text>
        <TextInput
          placeholder="Name Of Donator"
          onChange={(e) => setdonatorName(e.nativeEvent.text)}
          value={donatorName}
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Enter Deposite Date</Text>
        <TextInput
          placeholder="Enter Deposite Date"
          onChange={(e) => setdepositeDate(e.nativeEvent.text)}
          value={depositeDate}
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Please Upload Your Receipt</Text>
        <TextInput
          placeholder="Enter Deposite Date"
          onChange={(e) => setreceipt(e.nativeEvent.text)}
          value={receipt}
          style={styles.textInput2}
        ></TextInput>

        <Text style={styles.loginText}>Enter Your Amount</Text>
        <TextInput
          placeholder="Enter Your Amount"
          onChange={(e) => setamount(e.nativeEvent.text)}
          value={amount}
          style={styles.textInput2}
        ></TextInput>
        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={() => {
            addDonation();
          }}
        >
          <Text style={styles.loginText3}>Donate</Text>
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
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
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
    borderRadius: 25,
  },
  tinyLogo: {
    width: 450,
    height: 40,
    marginLeft: -15,
    marginTop: 0,
  },
  tinyLogo1: {
    width: 450,
    height: 200,
    marginBottom: 20,
  },
  tinyLogo4: {
    width: 450,
    height: 50,
    marginLeft: -15,
    marginTop: 20,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 44,
  },
  dropdown: {
    margin: 16,
    height: 45,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    width: 334,
    marginLeft: 45,
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderColor: "#FFBC26",
    borderWidth: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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
});
