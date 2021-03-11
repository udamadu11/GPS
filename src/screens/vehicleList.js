import React from 'react';
import {StyleSheet, FlatList, SafeAreaView,Platform,StatusBar} from 'react-native';
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
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={vehicle}
                keyExtractor={vehicle=>vehicle.id.toString()}
                renderItem={({item})=>
                <RenderList
                    vehicleNo ={item.vehicle_no}
                    emeiNo = {item.EMEI_no}
                    img = {item.image} 
                />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
export default vehicleList;