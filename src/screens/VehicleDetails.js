import React from 'react';
import { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView,StyleSheet,Platform,StatusBar,Text, Modal } from 'react-native';
import { Caption,Button } from 'react-native-paper';
import InputText from '../component/InputText';
import {firebase} from '../firebase/config';

function VehicleDetails({route,navigation}) {

    const details = route.params.text;
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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerscrollview}>
                {/* <Caption style={styles.caption}>Vehicle No</Caption> */}
                {/* <InputText editable={false}>{gps.vehicle_no}</InputText> */}
                <Button mode='contained' style={styles.button}>Vehicle No : {gps.vehicle_no}</Button>
                <Button mode='contained' style={styles.button}>EMEI No : {gps.emei_no}</Button>
                <Button mode='contained' style={styles.button}>Company Name : {gps.comapany_name}</Button>
                <Button mode='contained' style={styles.button}>Customer Type : {gps.customer_type}</Button>
                <Button mode='contained' style={styles.button}>Account code : {gps.account_code}</Button>
                <Button mode='contained' style={styles.button}>Installation Date : {gps.install_date}</Button>
                <Button mode='contained' style={styles.button}>PRO / LITE : {gps.platform}</Button>
                <Button mode='contained' style={styles.button}>Installation By : {gps.install_by}</Button>

                {/* <Caption style={styles.caption}>EMEI No</Caption>
                <InputText editable={false}>{gps.emei_no}</InputText>

                <Caption style={styles.caption}>Company Name</Caption>
                <InputText editable={false}>{gps.comapany_name}</InputText>

                <Caption style={styles.caption}>Customer Type</Caption>
                <InputText editable={false}>{gps.customer_type}</InputText>

                <Caption style={styles.caption}>Account code</Caption>
                <InputText editable={false}>{gps.account_code}</InputText>

                <Caption style={styles.caption}>Installation Date</Caption>
                <InputText editable={false}>{gps.install_date}</InputText>

                <Caption style={styles.caption}>PRO / LITE</Caption>
                <InputText editable={false}>{gps.platform}</InputText>

                <Caption style={styles.caption}>Installation By</Caption>
                <InputText editable={false}>{gps.install_by}</InputText> */}
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
        marginVertical:10,
        backgroundColor:'#40376E'
    }
})

export default VehicleDetails;