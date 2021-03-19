import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

function App() {
    return (
        // <NavigationContainer>
        //    <AuthNavigator />
        // </NavigationContainer>
        <SignIn />
    );
}

export default App;