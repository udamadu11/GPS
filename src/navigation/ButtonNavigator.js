import React from 'react';
import { View ,StyleSheet,  TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ButtonNavigator({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>    
            <View style={styles.container}>
                <Icon 
                    name='file-search'
                    color='white'
                    size={40}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:80,
        width:80,
        borderRadius:40,
        backgroundColor:'#a503fc',
        bottom:40,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        borderWidth:5
    }
})
export default ButtonNavigator;