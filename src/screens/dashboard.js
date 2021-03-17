import React from 'react';
import {ImageBackground, View ,StyleSheet} from 'react-native';
import DashboardCard from '../component/DashboardCard';
function dashboard({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/1.png')} style={styles.backgroundImage}>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flexDirection:'row'}}>
                                <DashboardCard 
                                    text="GPS"
                                    name="crosshairs"
                                    onPress={()=>navigation.navigate('vehicleList')}
                                />
                                
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <DashboardCard
                                    text="Workforce"
                                    name="sitemap"
                                    onPress={()=>navigation.navigate('workforceList')}
                                />
                            </View>
                    </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        resizeMode: 'cover', // or 'stretch'
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: 'center'
    }
});

export default dashboard;
