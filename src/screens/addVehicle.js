import React,{useState} from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView ,ImageBackground} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import Formic from 'formik';

function addVehicle(props) {
    const [vehicleNo , setVehicleNo] = useState('');
    const [emeiNo , setEmeiNo] = useState('');
    const [comapnyName , setComapnyName] = useState('');
    const [installDate , setInstallDate] = useState('');
    const [installBy , setInstallBy] = useState('');
    const [sensorName , setSensorName ] = useState('');



    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/1.png')} style={styles.backgroundImage}>
            <View style={{justifyContent:'center',alignSelf:'center',width:300}}>
                
                <TextInput
                    label="Vehicle Number"
                    mode='outlined'
                    value={vehicleNo}
                    onChangeText={text => setVehicleNo(vehicleNo)}
                />
                <TextInput
                    label="Emei Number"
                    mode='outlined'
                    value={emeiNo}
                    onChangeText={text => setEmeiNo(emeiNo)}
                />
                <TextInput
                    label="Company Name"
                    mode='outlined'
                    value={comapnyName}
                    onChangeText={text => setComapnyName(comapnyName)}
                />
                <TextInput
                    label="Install Date"
                    mode='outlined'
                    value={installDate}
                    onChangeText={text => setInstallDate(installDate)}
                />
                <TextInput
                    label="Install By"
                    mode='outlined'
                    value={installBy}
                    onChangeText={text => setInstallBy(installBy)}
                />
                <TextInput
                    label="Sensor Name"
                    mode='outlined'
                    value={sensorName}
                    onChangeText={text => setSensorName(sensorName)}
                />
                <Button 
                    icon="database-plus" 
                    mode="contained"
                    style={styles.button}
                    >Add</Button>   
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
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
    }
})
export default addVehicle;