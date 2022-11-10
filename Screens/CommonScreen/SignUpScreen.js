import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";

export default function SignUpScreen({ navigation }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [value, setValue] = useState(null);

  const data = [
    { label: "Admin", value: "Admin" },
    { label: "User", value: "User" },
  ];

  const onSignup = async () => {
    if (password == cpassword) {
      const payload = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        role: role,
      };

      await axios
        .post(
          "https://life-below-water.herokuapp.com/api/user/registeruser",
          payload
        )
        .then((res) => {
          if (res.data.status) {
            Alert.alert("Success", "User Registered Successfully");
            setTimeout(() => {
              navigation.push("SignInScreen");
            }, 2000);
          } else {
            Alert.alert("Error", "User Registration Failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Alert.alert("Error", "Password and Confirm Password should be same");
    }
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
        style={styles.tinyLogo2}
        source={require("../../assets/signup.jpg")}
      />
      <Text
        style={{
          fontSize: 28,
          marginLeft: 130,
          marginTop: -30,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        SignUp Page
      </Text>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <Text style={styles.loginText}>Enter Your Full Name</Text>
        <TextInput
          placeholder="Full Name"
          style={styles.textInput2}
          onChange={(e) => setname(e.nativeEvent.text)}
          value={name}
        ></TextInput>

        <Text style={styles.loginText}>Enter Your Phone Number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.textInput2}
          onChange={(e) => setphoneNumber(e.nativeEvent.text)}
          value={phoneNumber}
        ></TextInput>

        <Text style={styles.loginText}>Enter Your Email</Text>
        <TextInput
          placeholder="E-mail Address"
          style={styles.textInput2}
          onChange={(e) => setemail(e.nativeEvent.text)}
          value={email}
        ></TextInput>

        <Text style={styles.loginText}>Enter Your Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.textInput2}
          onChange={(e) => setpassword(e.nativeEvent.text)}
          value={password}
        ></TextInput>

        <Text style={styles.loginText}>Enter Confirm Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          style={styles.textInput2}
          onChange={(e) => setcpassword(e.nativeEvent.text)}
          value={cpassword}
        ></TextInput>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Your Role"
          searchPlaceholder="Search..."
          statusBarIsTranslucent={true}
          value={value}
          renderItem={renderItem}
          onChange={(item) => {
            setrole(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        />

        <TouchableOpacity style={[styles.containerx, styles.ButtonDark]}>
          <Text style={styles.loginText3} onPress={onSignup}>
            Register
          </Text>
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
  tinyLogo: {
    width: 470,
    height: 90,
    marginLeft: -15,
    marginTop: -50,
  },
  tinyLogo2: {
    width: 470,
    height: 150,
    marginLeft: -15,
    marginBottom: 30,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 54,
    marginTop: 0,
  },
  textInput2: {
    height: 35,
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
  dropdown: {
    margin: 16,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
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
    marginTop: 10,
    width: 332,
    marginLeft: 47,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
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
});
