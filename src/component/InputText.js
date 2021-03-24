import React from 'react';
import { TextInput, View ,StyleSheet } from 'react-native';
import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function InputText({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialComunityIcon name={icon} size={20} color='black' style={styles.icon} />}
            <TextInput {...otherProps} style={styles.text} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderRadius:10,
        width:'100%',
        marginVertical:5,
        padding:5,
        backgroundColor:'#343f56',
        alignItems:'center',
    },
    icon:{
        marginRight:10,
    },
    text:{
        color:'white',
        fontSize:16,
        padding:5
    }
})
export default InputText;