import React,{useState} from 'react';
import { ScrollView, Text, View,StyleSheet, SafeAreaView ,ImageBackground,Alert} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {firebase} from '../../firebase/config';


let gpsRef = firebase.firestore().collection('gps');

// const validationSchema = Yup.object().shape({
//     vehicleNo: Yup.string().required().label("Vehicle No"),
//     emeiNo: Yup.string().required().label("Emei No"),
//     comapanyName: Yup.string().label("Company Name"),
//     installDate: Yup.string().required().label("Install Date"),
//     installBy: Yup.string().required().label("Install By"),
//     sensorName: Yup.string().required().label("Sensor Name")
// });

function addVehicle(props) {
    
    const checkTextInput = (values) => {
        //Check for the vehicle name TextInput
        if (!values.vehicleNo.trim()) {
          alert('Please Enter Vehicle number');
          return;
        }
        //Check for the Emei Number TextInput
        if (!values.emeiNo.trim()) {
            alert('Please Enter Emei number');
            return;
          }
         //Check for the company name TextInput
        if (!values.comapanyName.trim()) {
            alert('Please Enter Company Name');
            return;
        }
         //Check for the install date TextInput
        if (!values.installDate.trim()) {
            alert('Please Enter Install Date');
            return;
        }
         //Check for the Install by TextInput
        if (!values.installBy.trim()) {
            alert('Please Enter Install By');
            return;
        }
        
        //Check for the sensor name TextInput
        if (!values.sensorName.trim()) {
          alert('Please Sensor Name');
          return;
        }

    }
    const handleSubmit = (values) =>{
        checkTextInput(values);
        gpsRef.doc(`${values.vehicleNo}`).set({
            vehicle_no:values.vehicleNo,
            emei_no:values.emeiNo,
            company_name:values.comapanyName,
            install_date:values.installDate,
            install_by:values.installBy,
            sensor_name:values.sensorName
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    
    }
   
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/1.png')} style={styles.backgroundImage}>
            <View style={{justifyContent:'center',alignSelf:'center',width:300}}>
                <Formik
                initialValues={{vehicleNo:"", emeiNo:"", comapanyName:"",installDate:"", installBy:"", sensorName:""}}
                onSubmit={handleSubmit}
               // validationSchema={validationSchema}
                >
                    {({handleChange,handleSubmit})=>(
                         <>
                         <TextInput
                             label="Vehicle Number"
                             mode='outlined'
                             onChangeText={handleChange("vehicleNo")}
                             required
                         />
                         <TextInput
                             label="Emei Number"
                             mode='outlined'
                             onChangeText={handleChange("emeiNo")}
                         />
                         <TextInput
                             label="Company Name"
                             mode='outlined'
                             onChangeText={handleChange("comapanyName")}
                         />
                         <TextInput
                             label="Install Date"
                             mode='outlined'
                             onChangeText={handleChange("installDate")}
                         />
                         <TextInput
                             label="Install By"
                             mode='outlined'
                             onChangeText={handleChange("installBy")}
                         />
                         <TextInput
                             label="Sensor Name"
                             mode='outlined'
                             onChangeText={handleChange("sensorName")}
                         />
                         <Button 
                             icon="database-plus" 
                             mode="contained"
                             style={styles.button}
                             onPress={handleSubmit}
                             >Add</Button>   
                         </>
                    )}
               
                </Formik>
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