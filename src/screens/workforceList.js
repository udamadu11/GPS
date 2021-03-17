import React from 'react';
import { useState,useEffect } from 'react';
import {StyleSheet, FlatList, SafeAreaView,Platform,StatusBar, View} from 'react-native';
import RenderList from '../component/renderList';
import {firebase} from '../firebase/config';


let gpsRef = firebase.firestore().collection('workforce')


function workforceList() {
    const[refreshing,setRefresh] = useState(false);
    const [gps,setGps] = useState([]);
    useEffect(() => {
        gpsRef
            .onSnapshot(
                querySnapshot => {
                    const newGps = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        newGps.push(entity)
                    });
                    setGps(newGps)
                },
                error => {
                    console.log(error)
                }
            )
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {gps && <FlatList
                data={gps}
                keyExtractor={(gpsList)=>gpsList.cutomer_name}
                renderItem={({item})=>
                <RenderList
                    title ={item.cutomer_name}
                    subtitle = {item.imei_no}
                    onPress={()=> console.log("selected",item.imei_no)}
                />}
                ItemSeparatorComponent={()=>
                    <View style={{backgroundColor:'#DAF4F5',height:1,width:'90%',marginLeft:10,marginRight:10}}/>
                }
                refreshing={refreshing}
                onRefresh={()=>{ gpsRef} }
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