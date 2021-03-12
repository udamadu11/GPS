import React from 'react';
import {View,StyleSheet, Image, Text, TouchableHighlight} from 'react-native';

function renderList({img,imageComponent,title,subtitle,onPress}) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor='#DAF4F5'>
            <View style={styles.container}>
                {imageComponent}
               {img && <Image source={img} style={styles.imageStyle} />}
                <View style={styles.sectionStyle}>
                    <Text style={styles.titleStyle}>{title}</Text>
                   { subtitle && <Text style={{color:'#828073'}}>{subtitle}</Text>}
                </View>
            </View>
        </TouchableHighlight>
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
        alignSelf:'center',
        justifyContent: 'center'
    },
    titleStyle:{
        fontWeight:"800"
    }
});
export default renderList;