import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import searchScreen from '../screens/searchScreen';
import vehicleDetails from '../screens/VehicleDetails';

const Stack = createStackNavigator();

const dashboardNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Search' component={searchScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Details' component={vehicleDetails} />
    </Stack.Navigator>
)

export default dashboardNavigator;

