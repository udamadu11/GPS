import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function dashboardNavigator(props) {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'black',
        }}
    >
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="format-list-bulleted-type" color={color} size={size} />
            }}
            name="Dashboard"
            component={Dashboard}
        />
        <Tab.Screen
            options={({ navigation }) => ({
                tabBarButton: () => <Button onPress={() => navigation.navigate("Map")} />,

            })}
            name="Map"
            component={MapScreen}
        />
        <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />,
                title: "Account"
            }}
            name="UserProfile"
            component={ProfileNavigator}
        />
    </Tab.Navigator>
    );
}

export default dashboardNavigator;

