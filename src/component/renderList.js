import React from 'react';
import {View,StyleSheet, Image, Text} from 'react-native';

function renderList({img,emeiNo,vehicleNo}) {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.imageStyle} />
            <View style={styles.sectionStyle}>
                <Text style={styles.vehicleStyle}>{vehicleNo}</Text>
                <Text style={{color:'#828073'}}>{emeiNo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:5
    },
    imageStyle:{
        width:60,
        height:60,
        borderRadius:30
    },
    sectionStyle:{
        marginLeft:10,
        alignSelf:'center'
    },
    vehicleStyle:{
        fontWeight:"800"
    }
});
export default renderList;