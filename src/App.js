import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';

function App() {
    return (
        <NavigationContainer>
           <AuthNavigator />
        </NavigationContainer>
    );
}

export default App;