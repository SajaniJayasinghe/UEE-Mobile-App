import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoadingScreen from "./Screens/CommonScreen/LoadingScreen";
// import HomeScreen from "./Screens/CommonScreen/HomeScreen";
// import SignInScreen from "./Screens/CommonScreen/SignInScreen";
// import SignUpScreen from "./Screens/CommonScreen/SignUpScreen";
// import Dashboard from "./Screens/CommonScreen/Dashboard";
import BlogsList from "./Screens/Blog/BlogsList";
import UpdateDeleteList from "./Screens/Blog/UpdateDeleteList";
import UpdateBlogs from "./Screens/Blog/UpdateBlogs";

import AddOrganization from "./Screens/Organizations/AddOrganization";
import AllOrganizations from "./Screens/Organizations/AllOrganizations";
import EditOrganizaton from "./Screens/Organizations/EditOrganizaton";
import AllEvents from "./Screens/Events/AllEvents";
import SpecificEventAdmin from "./Screens/Events/SpecificEventAdmin";
import SpecificEventUser from "./Screens/Events/SpecificEventUser";
import Organizations from "./Screens/Organizations/Organizations";
import SpecificOrganization from "./Screens/Organizations/SpecificOrganization";
import Members from "./Screens/Organizations/Members";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllOrganizations">
        <Stack.Screen name="BlogsList" component={BlogsList} />
        <Stack.Screen name="UpdateList" component={UpdateDeleteList} />
        <Stack.Screen name="UpdateBlogs" component={UpdateBlogs} />
        <Stack.Screen name="AddOrganization" component={AddOrganization} />
        <Stack.Screen name="AllOrganizations" component={AllOrganizations} />
        <Stack.Screen name="EditOrganizaton" component={EditOrganizaton} />
        <Stack.Screen name="Organizations" component={Organizations} />
        <Stack.Screen name="AllEvents" component={AllEvents} />
        <Stack.Screen
          name="SpecificEventAdmin"
          component={SpecificEventAdmin}
        />
        <Stack.Screen name="SpecificEventUser" component={SpecificEventUser} />
        <Stack.Screen
          name="SpecificOrganization"
          component={SpecificOrganization}
        />
        <Stack.Screen name="Members" component={Members} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
