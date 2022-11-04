import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogsList from "./Screens/Blog/BlogsList";
import UpdateDeleteList from "./Screens/Blog/UpdateDeleteList";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="BlogsList">
      <Stack.Screen name="BlogsList" component={BlogsList} />
      <Stack.Screen name="UpdateList" component={UpdateDeleteList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}