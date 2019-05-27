import React, { Component } from 'react'
import {StyleSheet,View, Image, Text} from 'react-native';

class ActivitiesDetailScreen extends Component {

    static navigationOptions = {
        title: 'Activity Detail'
      }
  render() {
    const { navigation } = this.props;
    const rewardId = navigation.getParam('rewardId', 'NO-ID');
    const image = navigation.getParam('image', 'NO-IMAGE');


    return (
     <View>
         <Text>Reward</Text>
         <Text>{rewardId}</Text>
         <Image source={image.url}/>

     </View>
    )
  }
}

export default ActivitiesDetailScreen