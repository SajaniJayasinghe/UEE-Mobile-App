import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";

export default function AddEvent({ route, navigation }) {
  const [eventTitle, setEventTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [description, setDescription] = useState("");
  const [eventImage, setEventImage] = useState("");
  const addEvent = () => {
    const URL = `https://life-below-water.herokuapp.com/api/event/addevent/${organizationID}`;

    const payload = {
      eventTitle: eventTitle,
      venue: venue,
      eventTime: eventTime,
      eventDate: eventDate,
      description: description,
      eventImage: eventImage,
    };

    axios
      .post(URL, payload)
      .then((res) => {
        Alert.alert("Your Event has been created successfully!!");
        navigation.navigate("Organizations");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Event adding Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.event1}
        source={{
          uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
        }}
      />
      <Text
        style={{
          fontWeight: "800",
          textAlign: "center",
          fontSize: 26,
          marginLeft: -10,
          marginTop: 30,
        }}
      >
        Create Event
      </Text>
      <ScrollView style={{ width: "80%", margin: 2 }}>
        <View>
          <Text style={styles.loginText}>Event Title</Text>
          <TextInput
            placeholder="Enter Event Title"
            style={styles.textInput2}
            value={eventTitle}
            onChange={(e) => setEventTitle(e.nativeEvent.text)}
          ></TextInput>

          <Text style={styles.loginText}>Event Venue</Text>
          <TextInput
            placeholder="Enter Event Title"
            style={styles.textInput2}
            value={venue}
            onChange={(e) => setVenue(e.nativeEvent.text)}
          ></TextInput>
          <Text style={styles.loginText}>Event Time</Text>
          <TextInput
            placeholder="Enter Event Title"
            style={styles.textInput2}
            value={eventTime}
            onChange={(e) => setEventTime(e.nativeEvent.text)}
          ></TextInput>
          <Text style={styles.loginText}>Event Date</Text>
          <TextInput
            placeholder="Enter Event Title"
            style={styles.textInput2}
            value={eventDate}
            onChange={(e) => setEventDate(e.nativeEvent.text)}
          ></TextInput>
          <Text style={styles.loginText}>Description</Text>
          <TextInput
            placeholder="Enter Event Title"
            style={styles.textInput2}
            value={description}
            onChange={(e) => setDescription(e.nativeEvent.text)}
          ></TextInput>
          <Text style={styles.loginText}>Image</Text>
          <TextInput
            placeholder="Enter Event Title"
            style={styles.textInput2}
            value={eventImage}
            onChange={(e) => setEventImage(e.nativeEvent.text)}
          ></TextInput>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.containerx, styles.ButtonDark]}
        onPress={() => {
          addEvent();
        }}
      >
        <Text style={styles.letsGetStarted}> CREATE</Text>
      </TouchableOpacity>
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
    marginTop: 20,
    marginLeft: 45,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
    fontSize: 18,
    lineHeight: 18,
    marginBottom: -10,
    marginLeft: 44,
  },
  loginlogo: {
    width: 440,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: -35,
  },
  logo1: {
    width: 300,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
    marginRight: 60,
    flexDirection: "row",
    marginBottom: 30,
  },

  ButtonDark: {
    height: 50,
    width: 170,
    borderRadius: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 200,
    marginTop: 150,
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
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: "black",
    marginTop: 5,
  },
  loginText: {
    color: "black",
    fontSize: 19,
  },
  loading: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 140,
    flexDirection: "row",
  },
  letsGetStarted: {
    fontSize: 20,
  },
});

// import axios from "axios";
// import React, { useState } from "react";
// import {
//    Alert,
//  Image,
//  ScrollView,
//  Text,
//  TextInput,
//  TouchableOpacity,
//  View,
// } from "react-native";

// const AddEvent = ({route, navigation}) => {
// const[eventTitle, setEventTitle]= useState("");
// const[venue,setVenue]= useState("");
// const[eventTime, setEventTime]= useState("");
// const[eventDate,setEventDate]= useState("");
// const[description,setDescription]= useState("");
// const[eventImage,setEventImage]= useState("");

// const addEvent = () => {
//   const payload = {
//     eventTitle:eventTitle,
//     venue:venue,
//     eventTime:eventTime,
//     eventDate:eventDate,
//     description:description,
//     eventImage:eventImage,
//   };

//   axios.post(URL, payload)
//   .then((_response) => {
//     Alert.alert(
//       "Event Added!",
//       "Your Event has been created successfully!!",
//       );
//     })
//     .catch((error) => {
//       console.error(error);
//       Alert.alert(
//         "Error",
//         "Inserting Unsuccessful",
//         [{ text: "Check Again" }],
//         { cancelable: false }
//       );
//     });
// };

// return (
//     <View style={styles.container}>
//       <Image
//         style={styles.event1}
//         source={{
//           uri: "https://media.istockphoto.com/photos/sea-life-on-beautiful-coral-reef-with-blacktail-butterflyfish-on-red-picture-id1364050573?b=1&k=20&m=1364050573&s=170667a&w=0&h=RU5Bi5gDzop_fvqiQXAk7elW3l8mS0t52VjLwl29bc0=",
//         }}
//       />
//       <Text
//         style={{
//           fontWeight: "800",
//           textAlign: "center",
//           fontSize: 26,
//           marginLeft: -10,
//           marginTop: 30,
//         }}
//       >
//         Create Event
//       </Text>
//       <ScrollView style={{ width: "80%", margin: 2 }}></ScrollView>

//         <Text
//           style={{
//             fontWeight: "800",
//             //   opacity: 0.6,
//             textAlign: "left",
//             fontSize: 20,
//             marginLeft: 20,
//             marginTop: 20,
//           }}
//         >
//          Event Title
//         </Text>
//         <TextInput
//          value={eventTitle}
//          onChange={(e) => setEventTitle(e.nativeEvent.text)}
//          style={styles.textView}
//          placeholder="Enter Event Title"
//         />

//         <Text
//           style={{
//             fontWeight: "800",
//             //   opacity: 0.6,
//             textAlign: "left",
//             fontSize: 20,
//             marginLeft: 20,
//             marginTop: 20,
//           }}
//         >
//           venue
//         </Text>
//         <TextInput
//           value={venue}
//           onChange={(e) => setVenue(e.nativeEvent.text)}
//           style={styles.textView}
//           placeholder="Enter Venue"
//         />
//          <Text
//           style={{
//             fontWeight: "800",
//             //   opacity: 0.6,
//             textAlign: "left",
//             fontSize: 20,
//             marginLeft: 20,
//             marginTop: 20,
//           }}
//         >
//          Event Title
//         </Text>
//         <TextInput
//          value={eventTitle}
//          onChange={(e) => setEventTitle(e.nativeEvent.text)}
//          style={styles.textView}
//          placeholder="Enter Event Title"
//         />
//          <Text
//           style={{
//             fontWeight: "800",
//             //   opacity: 0.6,
//             textAlign: "left",
//             fontSize: 20,
//             marginLeft: 20,
//             marginTop: 20,
//           }}
//         >
//          Event Title
//         </Text>
//         <TextInput
//          value={eventTitle}
//          onChange={(e) => setEventTitle(e.nativeEvent.text)}
//          style={styles.textView}
//          placeholder="Enter Event Title"
//         />
//         <Text
//           style={{
//             fontWeight: "800",
//             //   opacity: 0.6,
//             textAlign: "left",
//             fontSize: 20,
//             marginLeft: 20,
//             marginTop: 100,
//           }}
//         >
//           Add Image
//         </Text>

//       <TouchableOpacity
//         style={[styles.containerx, styles.ButtonDark]}
//         onPress={() => addEvent()}
//       >
//         <Text style={styles.letsGetStarted}> CREATE</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   input: {
//     height: 50,
//     margin: 12,
//     marginTop: 20,
//     borderWidth: 1,
//     padding: 10,
//     marginLeft: 60,
//     width: 290,
//   },
//   input2: {
//     height: 125,
//     margin: 12,
//     marginTop: 15,
//     borderWidth: 1,
//     padding: 10,
//     marginLeft: 60,
//     width: 290,
//     marginBottom: -70,
//   },
//   loginlogo: {
//     width: 440,
//     height: 300,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     marginLeft: 0,
//     marginTop: -35,
//   },
//   logo1: {
//     width: 300,
//     height: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 60,
//     marginRight: 60,
//     flexDirection: "row",
//     marginBottom: 30,
//   },

//   ButtonDark: {
//     height: 50,
//     width: 170,
//     borderRadius: 100,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     elevation: 5,
//     shadowOpacity: 1,
//     shadowRadius: 0,
//     marginLeft: 200,
//     marginTop: 150,
//   },
//   containerx: {
//     backgroundColor: "#ADDFFF",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     elevation: 2,
//     minWidth: 88,
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
//   text: {
//     color: "black",
//     marginTop: 5,
//   },
//   loginText: {
//     color: "black",
//     fontSize: 19,
//   },
//   loading: {
//     width: 150,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 50,
//     marginLeft: 140,
//     flexDirection: "row",
//   },
//   letsGetStarted: {
//     fontSize: 20,
//   },
// });
// export default AddEvent;
