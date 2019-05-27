import React, { Component } from 'react';
import {StyleSheet, Image,  Text, FlatList, TouchableOpacity,View} from 'react-native';


export class ActivitiesScreen extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      data: [],

    }
  }
  static navigationOptions = {
    title: 'Activities'
  }

 componentDidMount() {
  return fetch('http://127.0.0.1:8000/activity/')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
    this.setState({
      data: responseJson
    })
    
  })
  .catch((error) => {
    console.error(error);
  });

  };
 
  render() {

    console.log(this.state.data)
    return(
      <View style={styles.container} >
        <FlatList
        data={this.state.data}
        renderItem={({item}) =>
        <View style={{flex: 1, flexDirection: 'column', paddingTop: 0}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivitiesDetail', {
          activityId: item.id,
          description: item.description,
          image: item.image,
          start: item.start_time,
          end: item.end_time,
          week: item.week,
          where: item.where,
          contact: item.contact_person,
          phone: item.phone,

        })}>
        <Text style={styles.title}>{item.title}</Text>
      <Image source = {{uri: item.image }} style={styles.imageStyle}/> 

        </TouchableOpacity>
            </View>
        }
        
      />
     
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


  title: {
    fontFamily: 'Verdana',
    fontSize: 23,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingTop: 0,
  },
  imageStyle:{
    width: 320,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    borderRadius: 22,
  },
  
});

export default ActivitiesScreen
      
      