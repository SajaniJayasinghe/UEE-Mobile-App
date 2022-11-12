import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";

export default function EditDonations({ navigation }) {
  const [token, settoken] = useState("");
  const route = useRoute();

  const getToken = async () => {
    settoken(await AsyncStorage.getItem("token"));
  };

  console.log(route.params.donationID);

  const [donatorName, setdonatorName] = useState("");
  const [depositeDate, setdepositeDate] = useState("");
  // const [receipt, setreceipt] = useState("");
  const [amount, setamount] = useState("");
  const [paymenttype, setpaymenttype] = useState("");
  const [value, setValue] = useState(null);

  const data = [
    { label: "Cash", value: "Cash" },
    { label: "Online", value: "Online" },
  ];

  const getDonation = async () => {
    var Token = await AsyncStorage.getItem("token");
    console.log(Token);

    await axios
      .get(
        `https://life-below-water.herokuapp.com/api/donation/getonedonation/${route.params.donationID}`,
        {
          headers: {
            Authorization: Token,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setdonatorName(res.data.existingDonations.donatorName);
          setdepositeDate(res.data.existingDonations.depositeDate);
          // setreceipt(res.data.existingDonations.receipt);
          setamount(res.data.existingDonations.amount);
          setpaymenttype(res.data.existingDonations.paymenttype);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getDonation();
  }, []);

  console.log({ donatorName: donatorName });

  const updateDonation = async () => {
    const Token = await AsyncStorage.getItem("token");
    const URL = `https://life-below-water.herokuapp.com/api/donation/updatedonation/${route.params.donationID}`;

    const payload = {
      donatorName: donatorName,
      depositeDate: depositeDate,
      // receipt: receipt,
      amount: amount,
      paymenttype: paymenttype,
    };

    axios
      .put(URL, payload, {
        headers: {
          Authorization: Token,
        },
      })
      .then((_response) => {
        Alert.alert("Donation Updated Successfull");
        navigation.navigate("UserDashboard");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Updating Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

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
          uri: "https://static.vecteezy.com/system/resources/previews/002/788/768/original/woman-sitting-at-the-table-with-laptop-working-on-a-computer-freelance-online-education-or-social-media-concept-working-from-home-remote-job-flat-style-illustration-vector.jpg",
        }}
      />
      <Text style={styles.loginText1}>Edit Your Donator</Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.loginText}>Name Of Donator</Text>
        <TextInput
          placeholder="Name Of Donator"
          style={styles.textInput2}
          value={donatorName}
          onChange={(e) => setdonatorName(e.nativeEvent.text)}
        ></TextInput>

        <Text style={styles.loginText}>Enter Deposite Date</Text>
        <TextInput
          placeholder="Enter Deposite Date"
          style={styles.textInput2}
          value={depositeDate}
          onChange={(e) => setdepositeDate(e.nativeEvent.text)}
        ></TextInput>

        {/* <Text style={styles.loginText}>Please Upload Your Receipt</Text>
        <TextInput
          placeholder="Upload Your Receipt"
          style={styles.textInput2}
          value={receipt}
          onChange={(e) => setreceipt(e.nativeEvent.text)}
        ></TextInput> */}

        <Text style={styles.loginText}>Enter Your Amount</Text>
        <TextInput
          placeholder="Enter Your Amount"
          style={styles.textInput2}
          value={amount}
          onChange={(e) => setamount(e.nativeEvent.text)}
        ></TextInput>
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
          value={paymenttype}
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

        <TouchableOpacity
          style={[styles.containerx, styles.ButtonDark]}
          onPress={() => {
            updateDonation();
          }}
        >
          <Text style={styles.loginText3}>Update</Text>
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
  textInput2: {
    height: 40,
    width: 334,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 14,
    marginLeft: 45,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
    fontSize: 16,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 50,
  },
  loginText1: {
    marginLeft: 100,
    fontSize: 28,
    color: "#151B54",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  loginText2: {
    marginTop: 30,
    marginLeft: 50,
    fontSize: 18,
    lineHeight: 18,
  },
  loginText3: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
  },
  tinyLogo: {
    width: 470,
    height: 90,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo1: {
    width: 450,
    height: 190,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  tinyLogo4: {
    width: 450,
    height: 30,
    marginLeft: -15,
    marginTop: 0,
  },
  dropdown: {
    margin: 16,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    width: 334,
    marginLeft: 45,
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
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 45,
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
    marginLeft: 140,
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
