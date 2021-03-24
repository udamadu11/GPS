import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import LoadingScreen from '../screens/CommonFolder/LoadingScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import AppNavigator from './AppNavigator';


const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
);

export default AuthNavigator;