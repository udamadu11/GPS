import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

function ActivityIndicator({visible=false}) {
    if(!visible) return null;
    return (
        <LottieView
            autoPlay
            loop
            source={require('../assets/animation/7045-loading-adidi.json')}
            style={styles.animation}
        />
    );
}
const styles = StyleSheet.create({
    animation:{
        width:150,
        alignSelf:'center',
        marginTop:50
    }
})
export default ActivityIndicator;