import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

function searchScreen(props) {
    const [text, setText] = React.useState('');
    
    return (
        <View style={styles.container}>
        <ImageBackground source={require('../assets/1.png')} style={styles.backgroundImage}>
            <View style={{flex:1,justifyContent:'center',alignSelf:'center',width:300}}>
            <TextInput
                label="Search By Vehicle Number"
                value={text}
                onChangeText={text => setText(text)}
                mode='outlined'
            />
            <Button 
            icon="file-find" 
            mode="contained" 
            style={styles.button}
            onPress={() => console.log('Pressed')}>Search</Button>
        </View>
        </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor:'#23395B',
        marginTop:10
    },
    backgroundImage: {
        resizeMode: 'cover', // or 'stretch'
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: 'center'
    }
})
export default searchScreen;