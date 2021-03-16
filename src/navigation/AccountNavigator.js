import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import accountScreen from '../screens/accountScreen';


const Stack = createStackNavigator();

const dashboardNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='AccountScreen' component={accountScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
)

export default dashboardNavigator;

