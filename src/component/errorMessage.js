import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function errorMessage({error}) {
    return (
        <View>
            <Text style={styles.text}>{error}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    
    text:{
        color:'red',
    }
})
export default errorMessage;