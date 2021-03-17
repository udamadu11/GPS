import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

function emptyScreen(props) {
    return (
        <LottieView
            autoPlay
            loop
            source={require('../assets/animation/8021-empty-and-lost.json')}
        />
    );
}

export default emptyScreen;
