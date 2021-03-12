import React from 'react';
import { useState } from 'react';
import {StyleSheet, FlatList, SafeAreaView,Platform,StatusBar, View} from 'react-native';
import RenderList from '../component/renderList';
const vehicle = [
    {
        id:1,
        vehicle_no : 'LO-1234',
        EMEI_no: '3520930812312',
        image: require('../assets/list.png')
    },
    {
        id:2,
        vehicle_no : 'LO-1234',
        EMEI_no: '3520930812312',
        image: require('../assets/list.png')
    },
    {
        id:3,
        vehicle_no : 'LO-1234',
        EMEI_no: '3520930812312',
        image: require('../assets/list.png')
    }
]

function vehicleList() {
    const[refreshing,setRefresh] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={vehicle}
                keyExtractor={vehicle=>vehicle.id.toString()}
                renderItem={({item})=>
                <RenderList
                    title ={item.vehicle_no}
                    subtitle = {item.EMEI_no}
                    img = {item.image}
                    onPress={()=> console.log("selected",item.id)}
                />}
                ItemSeparatorComponent={()=>
                    <View style={{backgroundColor:'#DAF4F5',height:1,width:'90%',marginLeft:10,marginRight:10}}/>
                }
                refreshing={refreshing}
                onRefresh={()=>{} }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    }
})
export default vehicleList;