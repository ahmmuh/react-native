import React, { Component } from 'react'
import {StyleSheet,View, Image, Text} from 'react-native';

export default class AchievementDetail extends Component {
    static navigationOptions = {
        title: 'Achievement Detail'
      }
  render() {

    const { navigation } = this.props;
    const AchievementId = navigation.getParam('AchievementId', 'NO-ID');
    const image = navigation.getParam('image', 'NO-IMAGE');
    const description = navigation.getParam('description', 'NO-DESCRIPTION');
    return (
        <View>
            <Text>Achievement</Text>
            <Text>{AchievementId}</Text>
        </View>
    )
  }
}
