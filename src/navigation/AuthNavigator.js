import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import LoadingScreen from '../screens/LoadingScreen';
import DashboardScreen from '../screens/dashboard';
import SearchScreen from '../screens/searchScreen';
import AccountScreen from '../screens/accountScreen';

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;