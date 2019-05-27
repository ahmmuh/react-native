import React, { Component } from 'react'
import {StyleSheet, ScrollView, Image,
     TouchableOpacity, Text, View,TextInput} from 'react-native';


export class Profile extends Component {
    static navigationOptions ={
        title: 'Your Profile'
      }
  render() {
    return (
     <View style={styles.container}>
     <ScrollView style={{backgroundColor: '#222'}}>
        <View style={styles.profile}>
        <Image source={require('../images/profile.jpeg')}
        style={styles.profileImage}/> 
            <Text style={styles.profileText}>
            Anna Johansson
            </Text>
        </View>
         </ScrollView>
     </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{ 
        flex: 1,
    },
    profile: {
        height: 220,
        alignItems: 'center',
        backgroundColor: 'lightgray'
    },
    
    profileImage:{
        height: 180,
        borderRadius: 100,
        marginTop: 5,
        
      },
      profileText:{
        color: '#000',
        fontSize: 23,
        textAlign: 'center',
        paddingTop: 4,
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
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: '40%'

     },
    //  mainFooterText:{
    //      paddingTop: '100%',
    //      padding: 4,
    //      fontSize: 20,
    //      color: 'white'
    //  },
     bottomIcons:{
         padding: 5,
         fontSize: 24,
     },
     codeMillIcon:{
        width: 25,
        height: 25,
       backgroundColor: 'black',
      paddingTop: 10,
     },
     activityOptionOne:{
         backgroundColor: "red",
         width: '80%',
         height: 50,
         color: "white",
         borderWidth: 1,
         borderRadius: 20,
         margin: 4,
         padding: 8,
         fontSize: 18
       
     },
     activityOptionTwo:{
        backgroundColor: "green",
        width: '80%',
        height: 50,
        color: "white",
        borderWidth: 1,
        borderRadius: 20,
        margin: 4,
      
        
     },
     optionText:{
        padding: 8,
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
     },
     welcome:{
         fontSize: 30,
         textAlign: 'center',
         color: 'white'
     }
        
})
export default Profile