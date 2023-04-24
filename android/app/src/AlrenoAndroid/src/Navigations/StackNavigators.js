/* eslint-disable prettier/prettier */
import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import Alreno from '../Components/Alreno';
import SignInForm from '../Components/SignInForm';
import CreateForm from '../Components/CreateForm';
import RecoverPassword from '../Components/RecoverPassword';
import Home from '../Components/Home';
import HomeHeader from '../Components/HomeHeader';
import Profile from '../Components/Profile';
import EditProfile from '../Components/EditProfile';
import WifiSave from '../Components/WifiSave';
import UnderContruction from '../Components/UnderContruction';
// import Products from "../Components/Products";
// import Transaction from "../Components/Transaction";

// import tankWeight from "../Components/tankWeight";

const Stack = createStackNavigator();
const StackNavigators = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Alreno" component={Alreno} />

        <Stack.Screen
          name="Sign in"
          component={SignInForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create Account"
          component={CreateForm}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Forgot Password" component={RecoverPassword} />
        <Stack.Screen name="HomeHead" component={HomeHeader} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Edit your Profile" component={EditProfile} />
        <Stack.Screen name="Wi-Fi" component={WifiSave} />
        <Stack.Screen name="Coming Soon" component={UnderContruction} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigators;
