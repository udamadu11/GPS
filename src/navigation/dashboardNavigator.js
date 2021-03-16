import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import dashboard from '../screens/dashboard';
import vehicleList from '../screens/vehicleList';
const Stack = createStackNavigator();

const dashboardNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='List' component={vehicleList} />
    </Stack.Navigator>
)

export default dashboardNavigator;

