import React from 'react';
import { View,StyleSheet,Platform,StatusBar, FlatList} from 'react-native';
import Icon from '../component/icon';
import RenderList from '../component/renderList';
import {firebase} from '../firebase/config';
const MenuItem = [
    {
        title : 'Setting',
        icon:{
            name:'cog-outline',
            backgroundColor:'#50A8F0'
        }
    },
];

function accountScreen(props) {
    const logout = async () =>{
        try{
            const response = firebase.auth().signOut();
        }catch(error){
            console.error(error);
        }
    }
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <RenderList 
                    title='Udara Madumalka'
                    subtitle='Madu@gmail.com'
                    img = {require('../assets/list.png')}
                />
            </View>
            <View style={styles.container2}>
                <FlatList 
                    data={MenuItem}
                    keyExtractor={MenuItem => MenuItem.title}
                    renderItem={({item})=> (<RenderList  
                        title={item.title}
                        imageComponent={
                            <Icon 
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                        />}
                         />)}
                    ItemSeparatorComponent={()=>
                        <View style={{backgroundColor:'#DAF4F5',height:1,width:'90%',marginLeft:10,marginRight:10}}/>
                    }
                />
            </View>
            <View style={styles.container2}>
                <RenderList 
                    title='Logout'
                    imageComponent={
                        <Icon 
                            name='logout'
                            backgroundColor='#DE3352'
                            size={60}
                        />}
                    onPress={()=>logout()}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    container2:{
        backgroundColor:'white',
        marginVertical:20
    },
    screen:{
       // paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1
    }
})
export default accountScreen;