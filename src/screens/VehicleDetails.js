import React from 'react';
import { SafeAreaView, ScrollView,StyleSheet,Platform,StatusBar,Text } from 'react-native';
import { Caption } from 'react-native-paper';
import InputText from '../component/InputText';
function VehicleDetails() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.containerscrollview}>
                <Caption style={styles.caption}>Vehicle No</Caption>
                <InputText editable={false}>LO-340</InputText>

                <Caption style={styles.caption}>EMEI No</Caption>
                <InputText editable={false}>35402018188234</InputText>

                <Caption style={styles.caption}>Company Name</Caption>
                <InputText editable={false}>ABC PVT</InputText>

                <Caption style={styles.caption}>Customer Type</Caption>
                <InputText editable={false}>Internal</InputText>

                <Caption style={styles.caption}>Account code</Caption>
                <InputText editable={false}>Icopsd</InputText>

                <Caption style={styles.caption}>Installation Data</Caption>
                <InputText editable={false}>2020/07/12</InputText>

                <Caption style={styles.caption}>PRO / LITE</Caption>
                <InputText editable={false}>PRO</InputText>

                <Caption style={styles.caption}>Installation By</Caption>
                <InputText editable={false}>DIMO</InputText>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        padding:10
    },
    scrollview:{
        backgroundColor:'#67ADDB',
        marginHorizontal:10
    },
    caption:{
        fontSize:18,
        padding:5
    }
})

export default VehicleDetails;