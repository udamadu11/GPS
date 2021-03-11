import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text} from 'react-native';
import { Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DashboardCard = ({size = 40, name,text,onPress}) =>{
    return(
    <TouchableOpacity onPress={onPress}>
        <Card style={styles.cardContainer}>
           <View style={styles.Iconcontainer}>
                <Icon name={name} color='#a503fc' size={size} />
            </View>
            <Text style={styles.text}>{text}</Text>
        </Card>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.30,
        elevation: 10,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        marginVertical: 10,
        marginHorizontal:10
    },
    Iconcontainer:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        borderRadius: 40,
        borderColor: '#a503fc',
        borderWidth: 5,
        height: 50,
        width: 50
    },
    text:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        fontWeight:"700",
        fontSize:15,
        color: '#5675'
        
    }
});

export default DashboardCard;