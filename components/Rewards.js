import React, { Component } from 'react'
import {StyleSheet, Image, FlatList,  Text, TouchableOpacity,View} from 'react-native';

export class Rewards extends Component {

  static navigationOptions = {
    title: 'Reward'
  }

  constructor(props){
    super(props);
    this.state = {
      data: [],

    }
  }
  componentDidMount() {
    return fetch('http://127.0.0.1:8000/reward/')
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
    return (
      <View style={styles.container} >
      <FlatList
      data={this.state.data}
      renderItem={({item}) =>
      <View style={{flex: 1, flexDirection: 'column'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('RewardDetail', {
        rewardId: item.id,
        image: item.image
      })}>
      <Text>{item.title}</Text>
    <Image source = {{uri: item.image }} style={styles.imageStyle}/> 
      </TouchableOpacity >
          </View>
      }
      
    />
   
  </View>
    )
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
    fontSize: 26
  },
  imageStyle:{
    width: 200,
    height: 150,
    borderRadius: 10,
    marginTop: 10
  },
  
});

export default Rewards
