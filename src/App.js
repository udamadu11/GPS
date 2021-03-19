import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import {firebase} from './firebase/config';
import AppNavigator from './navigation/AppNavigator';

function App() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
      }, []);
    
      if (initializing) return null;
    

    return (
        <NavigationContainer>
           {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}

export default App;