import React, { Component } from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native'
//import Route from './routing/Route'
//import BottomTabNavigator from './routing/BottomNavigation'
export class HomeScreen extends Component {

    static navigationOptions ={
        title: 'Home'
    }
  render() {
    return (
        <View style={styles.container}>
    <Image  source={require('../images/homeGirl.jpg')}
        style={styles.homeGirl}/>
        <Text>Welcome To home</Text>
        <View style={{flex: 1}}>
            <Image source={require('../images/diagram.png')}
            style={{ flex: 1, height:'40%', width: '100%', alignContent:'center', 
            backgroundColor: '#777', position:'absolute', bottom: 0}}/>
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    homeGirl:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        flex: 1,
        justifyContent: 'center'
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#777',
        height: 70,
     },
  
     footerText:{
         fontSize: 15,
         padding: 5,
         textAlign: 'center',
         color: 'white',
     },
     mainFooter:{
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
     },
     mainFooterText:{
         paddingTop: '100%',
         padding: 4,
         fontSize: 20,
         color: 'white'
     },
     bottomIcons:{
         padding: 5,
         fontSize: 24,
     },
     codeMillIcon:{
        width: 25,
        height: 25,
       backgroundColor: 'black',
      paddingTop: 10,

       
     }
})

export default HomeScreen
