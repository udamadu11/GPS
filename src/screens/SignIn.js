import React, { useState } from 'react';
import {ImageBackground, View ,StyleSheet, Text, Image} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

function SignIn(props) {
        const [text , setText] = useState('');
        const [password , setPass] = useState('');
        const [Cpassword , setSpassword] = useState('');
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/1.png')} style={styles.backgroundImage}>
                
                    <View style={{justifyContent:'center',alignSelf:'center',width:300}}>
                    
                        <LottieView
                            autoPlay
                            loop
                            source={require('../assets/animation/50124-user-profile.json')}
                            style={{width:120,justifyContent:'center',alignSelf:'center'}}
                        />
                        <TextInput
                            label="Email"
                            value={text}
                            onChangeText={text => setText(text)}
                            mode='outlined'
                            textContentType='emailAddress'
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={text => setPass(text)}
                            mode='outlined'
                            secureTextEntry={true}
                            textContentType='password'
                        />
                       
                        <Button 
                            icon="login" 
                            mode="contained" 
                            style={styles.button}
                            >Sign In</Button>
    
                            <View style={styles.textOr}> 
                                <Text style={{color:'#797979'}}>OR</Text>
                            </View>
                            <View style={styles.icon}>
                                <Image source={require('../assets/facebook.png')} style={styles.logo} />
                                <Image source={require('../assets/search.png')} style={styles.logo} />
                                <Image source={require('../assets/twitter.png')} style={styles.logo} />
                            </View>
                            <View style={styles.signIn}> 
                                <Text style={{color:'#797979'}}>Don't have an Account ? </Text>
                                <Text>Sign Up</Text>
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
        },
        button:{
            backgroundColor:'#23395B',
            marginTop:10
        },
        textOr:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:10,
            marginBottom:10
        },
        icon:{
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
        },
        logo:{
            width:40,
            height:40,
            marginHorizontal:10
        },
        signIn:{
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            marginTop:20
        }
    });
    
export default SignIn;