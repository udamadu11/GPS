import React from 'react';
import { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView,StyleSheet,Platform,StatusBar,View ,Alert} from 'react-native';
import { Caption,Button } from 'react-native-paper';
import InputText from '../../component/InputText';
import {firebase} from '../../firebase/config';

function updateList({route,navigation}) {
    const details = route.params.vehicle_no;
    let gpsRef = firebase.firestore().collection('gps');
    const [gps,setGps] = useState([]);
    
    useEffect(() => {
        gpsRef
            .where("vehicle_no", "==", details)
            .onSnapshot(
                querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        setGps(entity)
                    });
                },
                error => {
                    console.log(error)
                }
            )
    }, []);

    const alertShowOne = () =>{
        Alert.alert(
            "Delete",
            "Are you Sure you Want to Delete this ?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () =>handelDelete() }
            ]
          );
    }

    const handelDelete = async() =>{
        gpsRef.doc(`${details}`).delete().then(() => {
            console.log("Document successfully deleted!");
            navigation.navigate('update');
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.containerscrollview}>
            <Caption style={styles.caption}>Vehicle No</Caption>
            <InputText>{gps.vehicle_no}</InputText>
            
           <Caption style={styles.caption}>EMEI No</Caption>
            <InputText>{gps.emei_no}</InputText>

            <Caption style={styles.caption}>Company Name</Caption>
            <InputText>{gps.company_name}</InputText>

           
            <Caption style={styles.caption}>Installation Date</Caption>
            <InputText>{gps.install_date}</InputText>

            <Caption style={styles.caption}>Installation By</Caption>
            <InputText>{gps.install_by}</InputText>
            <View style={styles.buttonSection}>
                
                <Button 
                    icon="delete" 
                    mode="contained" 
                    style={[styles.button,{backgroundColor:'#e9896a'}]}
                    onPress={alertShowOne}
                    >Delete</Button>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding:10,
        marginBottom:20
    },
    scrollview:{
        backgroundColor:'#67ADDB',
        marginHorizontal:10
    },
    caption:{
        fontSize:18,
        padding:5
    },
    button:{
        backgroundColor:'#387c6d',
        width:200
        
    },
    buttonSection:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'center'
    }
});
export default updateList;