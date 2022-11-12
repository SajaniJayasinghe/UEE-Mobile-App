import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./Screens/CommonScreen/LoadingScreen";
import HomeScreen from "./Screens/CommonScreen/HomeScreen";
import SignInScreen from "./Screens/CommonScreen/SignInScreen";
import SignUpScreen from "./Screens/CommonScreen/SignUpScreen";
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
import EditEvent from "./Screens/Events/EditEvent";
import AdminDashboard from "./Screens/CommonScreen/AdminDashboard";
import AllEventsAdmin from "./Screens/Events/AllEventsAdmin";
import AddOrganization from "./Screens/Organizations/AddOrganization";
import AllOrganizations from "./Screens/Organizations/AllOrganizations";
import EditOrganizaton from "./Screens/Organizations/EditOrganizaton";
import Organizations from "./Screens/Organizations/Organizations";
import SpecificOrganization from "./Screens/Organizations/SpecificOrganization";
import Members from "./Screens/Organizations/Members";
import AddBlog from "./Screens/Blog/AddBlog";
import AdditionalVideosImages from "./Screens/Blog/AdditionalVideosImages";
import UpdateBlog from "./Screens/Blog/UpdateBlog";
import BlogsList from "./Screens/Blog/BlogsList";
import SpecificBlog from "./Screens/Blog/SpecificBlog";
import AllAdditionalblogs from "./Screens/Blog/AllAdditionalblogs";
import Userallblogs from "./Screens/Blog/Userallblogs";
import UserSpecificblog from "./Screens/Blog/UserSpecificblog";
import UserAdditionalblogs from "./Screens/Blog/UserAdditionalblogs";

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
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="UpdateUserProfile" component={UpdateUserProfile} />
        <Stack.Screen name="AllEvents" component={AllEvents} />
        <Stack.Screen
          name="SpecificEventAdmin"
          component={SpecificEventAdmin}
        />
        <Stack.Screen name="SpecificEventUser" component={SpecificEventUser} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="EditEvent" component={EditEvent} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="AllEventsAdmin" component={AllEventsAdmin} />
        <Stack.Screen name="AddOrganization" component={AddOrganization} />
        <Stack.Screen name="AllOrganizations" component={AllOrganizations} />
        <Stack.Screen name="EditOrganizaton" component={EditOrganizaton} />
        <Stack.Screen name="Organizations" component={Organizations} />
        <Stack.Screen
          name="SpecificOrganization"
          component={SpecificOrganization}
        />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="BlogsList" component={BlogsList} />
        <Stack.Screen name="UpdateBlog" component={UpdateBlog} />
        <Stack.Screen name="UpdateList" component={SpecificBlog} />
        <Stack.Screen name="AddBlog" component={AddBlog} />
        <Stack.Screen
          name="AdditionalVideosImages"
          component={AdditionalVideosImages}
        />
        <Stack.Screen
          name="AllAdditionalblogs"
          component={AllAdditionalblogs}
        />
        <Stack.Screen name="Userallblogs" component={Userallblogs} />
        <Stack.Screen name="UserSpecificblog" component={UserSpecificblog} />
        <Stack.Screen
          name="UserAdditionalblogs"
          component={UserAdditionalblogs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
