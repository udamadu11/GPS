import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import {firebase} from './firebase/config';
import AppNavigator from './navigation/AppNavigator';
import AddVehicle from './screens/Technician/addVehicle';
import ListItem from './screens/Technician/listItem';
import Temp from './navigation/temp';

function App() {
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    //   }
    
    //   useEffect(() => {
    //     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; 
    //   }, []);
    
    //   if (initializing) return null;
    

    return (
        // <NavigationContainer>
        //    {user ? <AppNavigator /> : <AuthNavigator />}
        // </NavigationContainer>
        // <AddVehicle />
        // <ListItem />

        <NavigationContainer>
          <Temp />
        </NavigationContainer>
        
    );
}

export default App;