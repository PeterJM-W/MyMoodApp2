import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "../navigation/DrawerNavigator";
import Login from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();
const StackNav = () => {
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>) }


export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}


