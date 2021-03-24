import React from 'react';
import { useState,useEffect } from 'react';
import {StyleSheet, FlatList, SafeAreaView,Platform,StatusBar, View} from 'react-native';
import LottieView from 'lottie-react-native'; 

import RenderList from '../../component/renderList';
import {firebase} from '../../firebase/config';
import ActivityIndicator from '../../component/ActivityIndicator';
import ItemDelete from '../../component/ItemDelete';


let gpsRef = firebase.firestore().collection('gps');

function listItem({navigation}) {
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
            {gps  ? <FlatList
                data={gps}
                keyExtractor={(gpsList)=>gpsList.vehicle_no}
                renderItem={({item})=>
                <RenderList
                    title ={item.vehicle_no}
                    subtitle = {item.emei_no}
                    img={require('../../assets/cars.png')}
                    onPress={()=>navigation.navigate("temp",{vehicle_no:item.vehicle_no})}
                    renderRightActions={ItemDelete}
                />}
                ItemSeparatorComponent={()=>
                    <View style={{backgroundColor:'#f3f4ed',height:1,width:'90%',marginLeft:10,marginRight:10}}/>
                }
            /> : <LottieView
            autoPlay
            loop
            source={require('../../assets/animation/8774-loading.json')}
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
export default listItem;