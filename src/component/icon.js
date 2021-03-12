import React from 'react';
import { View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
function icon({name,size=60,iconColor='white',backgroundColor}) {
    return (
       <View style={{width:size,height:size,backgroundColor,borderRadius:size/2,justifyContent:'center',alignItems:'center'}}>
           <MaterialIcon name={name} color={iconColor} size={size/2} />
       </View>
    );
}

export default icon;