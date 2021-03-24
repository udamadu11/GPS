import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ListItem from '../screens/Technician/listItem';
import UpdateList from '../screens/Technician/updateList';


const Stack = createStackNavigator();

const dashboardNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='update' component={ListItem} options={{headerShown:false}}/>
        <Stack.Screen name='temp' component={UpdateList} options={{headerShown:false}}/>
    </Stack.Navigator>
)

export default dashboardNavigator;

