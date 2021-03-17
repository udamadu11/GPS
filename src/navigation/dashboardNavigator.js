import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import dashboard from '../screens/dashboard';
import vehicleList from '../screens/vehicleList';
import workforceList from '../screens/workforceList';
const Stack = createStackNavigator();

const dashboardNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='vehicleList' component={vehicleList} />
        <Stack.Screen name='workforceList' component={workforceList} />
    </Stack.Navigator>
)

export default dashboardNavigator;

