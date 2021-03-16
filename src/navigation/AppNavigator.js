import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import accountNavigator from './AccountNavigator';
import dashboardNavigator from './dashboardNavigator';
import searchNavigator from './searchNavigator';
import ButtonNavigator from './ButtonNavigator';
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator tabBarOptions={{style:{backgroundColor:'#a503fc'},inactiveTintColor:'black',activeTintColor:'white'}}>
        <Tab.Screen 
            name='Dashboard' 
            component={dashboardNavigator}
            options={{
            tabBarIcon:({size,color}) => <Icon name='view-dashboard' size={size} color={color}/>
        }}
         />
        <Tab.Screen 
            name='Search' 
            component={searchNavigator} 
            options={({navigation}) => ({
                tabBarButton: () => (<ButtonNavigator onPress={() => navigation.navigate("Search")}/>) ,
                tabBarIcon:({size,color}) => <Icon name='file-search' size={size} color={color}/>
            })}
            />
        <Tab.Screen 
            name='Account' 
            component={accountNavigator}
            options={{
                tabBarIcon:({size,color}) => <Icon name='account' size={size} color={color}/>
            }} />
    </Tab.Navigator>
)

export default AppNavigator;