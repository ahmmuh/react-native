import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Rewards from './Rewards'
class AchievmentsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],

    }
  }
  static navigationOptions = {
    title: 'Achivements'
  }
  componentDidMount() {
    return fetch('http://127.0.0.1:8000/achievement/')
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

  static navigationOptions = {
    title: 'Achievments'
  }
  render() {
    return (
      <View style={styles.container} >
        <FlatList
        data={this.state.data}
        renderItem={({item}) =>
        <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AchievementDetail', {
          AchievementId: item.id,
          image: item.image,
          description: item.description
        })}>
        <Text>{item.title}</Text>
      <Image source = {{uri: item.image }} style={styles.imageStyle}/> 
        </TouchableOpacity >
            </View>
        }
        
      />
     
    </View>
    );
  }

}


class RewardsScreen extends React.Component {
  render() {
    return (
      <Rewards />
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Achievments: AchievmentsScreen,
  Rewards: RewardsScreen,
});

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

export default createAppContainer(TabNavigator);