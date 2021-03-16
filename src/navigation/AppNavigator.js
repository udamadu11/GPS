import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import accountScreen from '../screens/accountScreen';
import dashboardNavigator from './dashboardNavigator';
import searchNavigator from './searchNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Dashboard' component={dashboardNavigator} />
        <Tab.Screen name='Search' component={searchNavigator} />
        <Tab.Screen name='Account' component={accountScreen} />
    </Tab.Navigator>
)

export default AppNavigator;