import React from 'react';
import { View,StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function ItemDelete(props) {
    return (
        <View style={styles.container}>
            <MaterialIcon  name='trash-can' size={35} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:70,
        backgroundColor:'red'
    },
    icon:{
        justifyContent:'center'
    }
})

export default ItemDelete;