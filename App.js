import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreen/LoadingScreen";
import HomeScreen from "./Screens/CommonScreen/HomeScreen";
import SignInScreen from "./Screens/CommonScreen/SignInScreen";
import SignUpScreen from "./Screens/CommonScreen/SignUpScreen";
import Dashboard from "./Screens/CommonScreen/Dashboard";
import BlogsList from "./Screens/Blog/BlogsList";
import UpdateDeleteList from "./Screens/Blog/UpdateDeleteList";
import UpdateBlogs from "./Screens/Blog/UpdateBlogs";
import DeleteBlogs from "./Screens/Blog/DeleteBlogs";
import AddBlog from "./Screens/Blog/AddBlog";
import AdditionalVideosImages from "./Screens/Blog/AdditionalVideosImages";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage">
        <Stack.Screen name="LoadingPage" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="BlogsList" component={BlogsList} />
      <Stack.Screen name="UpdateList" component={UpdateDeleteList} />
      <Stack.Screen name="UpdateBlogs" component={UpdateBlogs} />
      <Stack.Screen name="DeleteBlogs" component={DeleteBlogs} />
      <Stack.Screen name="AddBlog" component={AddBlog} />
      <Stack.Screen name="AdditionalVideosImages" component={AdditionalVideosImages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
