import React from 'react';
import { useState,useEffect } from 'react';
import {StyleSheet, FlatList, SafeAreaView,Platform,StatusBar, View} from 'react-native';
import {firebase} from '../firebase/config';
import LottieView from 'lottie-react-native'; 

import ActivityIndicator from '../component/ActivityIndicator';
import RenderList from '../component/renderList';



let gpsRef = firebase.firestore().collection('workforce')


function workforceList() {
    const[refreshing,setRefresh] = useState(false);
    
    const [gps,setGps] = useState([]);
    useEffect(() => {
        setRefresh(true)
        gpsRef
            .onSnapshot(
                querySnapshot => {
                    const newGps = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        newGps.push(entity)
                    });
                    setGps(newGps)
                    setRefresh(false)
                },
                error => {
                    console.log(error)
                }
            )
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator visible={refreshing} />
            {gps ? <FlatList
                data={gps}
                keyExtractor={(gpsList)=>gpsList.cutomer_name}
                renderItem={({item})=>
                <RenderList
                    title ={item.cutomer_name}
                    img={require('../assets/list.png')}
                    subtitle = {item.imei_no}
                    onPress={()=> console.log("selected",item.imei_no)}
                />}
                ItemSeparatorComponent={()=>
                    <View style={{backgroundColor:'#DAF4F5',height:1,width:'90%',marginLeft:10,marginRight:10}}/>
                }
                refreshing={refreshing}
            /> : <LottieView 
                    autoPlay
                    loop
                    source={require('../assets/animation/7045-loading-adidi.json')}
            />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    }
})
export default workforceList;