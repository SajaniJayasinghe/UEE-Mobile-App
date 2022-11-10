import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreen/LoadingScreen";
import HomeScreen from "./Screens/CommonScreen/HomeScreen";
import SignInScreen from "./Screens/CommonScreen/SignInScreen";
import SignUpScreen from "./Screens/CommonScreen/SignUpScreen";
import BlogsList from "./Screens/Blog/BlogsList";
import UpdateDeleteList from "./Screens/Blog/UpdateDeleteList";
import UpdateBlogs from "./Screens/Blog/UpdateBlogs";
import DeleteBlogs from "./Screens/Blog/DeleteBlogs";
import AddDonations from "./Screens/Donation/AddDonations";
import DisplayAllDonations from "./Screens/Donation/DisplayAllDonations";
import UserProfile from "./Screens/CommonScreen/UserProfile";
import UserDashboard from "./Screens/CommonScreen/UserDashboard";
import UpdateUserProfile from "./Screens/CommonScreen/UpdateUserProfile";
import EditDonations from "./Screens/Donation/EditDonations";
import DonationsList from "./Screens/Donation/DonationsList";
import ReceivedDonations from "./Screens/Donation/ReceivedDonations";
import AllEvents from "./Screens/Events/AllEvents";
import SpecificEventAdmin from "./Screens/Events/SpecificEventAdmin";
import SpecificEventUser from "./Screens/Events/SpecificEventUser";
import AddEvent from "./Screens/Events/AddEvent";
import AdminDashboard from "./Screens/CommonScreen/AdminDashboard";
import AllEventsAdmin from "./Screens/Events/AllEventsAdmin";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage">
        <Stack.Screen name="LoadingPage" component={LoadingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="AddDonations" component={AddDonations} />
        <Stack.Screen
          name="DisplayAllDonation"
          component={DisplayAllDonations}
        />
        <Stack.Screen name="EditDonations" component={EditDonations} />
        <Stack.Screen name="DonationsList" component={DonationsList} />
        <Stack.Screen name="ReceivedDonations" component={ReceivedDonations} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="BlogsList" component={BlogsList} />
        <Stack.Screen name="UpdateList" component={UpdateDeleteList} />
        <Stack.Screen name="UpdateBlogs" component={UpdateBlogs} />
        <Stack.Screen name="DeleteBlogs" component={DeleteBlogs} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="UpdateUserProfile" component={UpdateUserProfile} />
        <Stack.Screen name="AllEvents" component={AllEvents} />
        <Stack.Screen
          name="SpecificEventAdmin"
          component={SpecificEventAdmin}
        />
        <Stack.Screen name="SpecificEventUser" component={SpecificEventUser} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AllEventsAdmin" component={AllEventsAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
