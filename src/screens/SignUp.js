import React, { useState } from 'react';
import {ImageBackground, View ,StyleSheet, Text, Image, Alert,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {firebase} from '../firebase/config';

function SignUp({navigation}) {
    const [email , setText] = useState('');
    const [password , setPass] = useState('');
    const [Cpassword , setSpassword] = useState('');

    const Signup = async () =>{
        try{
            if(password == Cpassword){
                const response = await firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(() => {
                    console.log('Account Create!');
                    navigation.navigate('SignIn');
                })
            }else{
                Alert.alert("Password is not Match ...");
            }
           
        }catch(error){
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
          
              console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/1.png')} style={styles.backgroundImage}>
            
                <View style={{justifyContent:'center',alignSelf:'center',width:300}}>
                
                    <LottieView
                        autoPlay
                        loop
                        source={require('../assets/animation/53395-login.json')}
                        style={{width:120,justifyContent:'center',alignSelf:'center'}}
                    />
                    <TextInput
                        label="Email"
                        value={email}
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
                    <TextInput
                        label="ConfirmPassword"
                        value={Cpassword}
                        onChangeText={text => setSpassword(text)}
                        mode='outlined'
                        secureTextEntry={true}
                        textContentType='password'
                    />
                    <Button 
                        icon="account-multiple-plus" 
                        mode="contained" 
                        style={styles.button}
                        onPress={()=>Signup()}
                        >Sign Up</Button>

                        <View style={styles.textOr}> 
                            <Text style={{color:'#797979'}}>OR</Text>
                        </View>
                        <View style={styles.icon}>
                            <Image source={require('../assets/facebook.png')} style={styles.logo} />
                            <Image source={require('../assets/search.png')} style={styles.logo} />
                            <Image source={require('../assets/twitter.png')} style={styles.logo} />
                        </View>
                        <TouchableOpacity style={styles.signIn} onPress={()=>navigation.navigate("SignIn")}> 
                                <Text style={{color:'#797979'}}>You have an Account ? Sign in</Text>
                        </TouchableOpacity>
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
        padding:10
    }
});

export default SignUp;
