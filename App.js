
import React, {Component} from 'react';
import { StyleSheet, Image, TouchableOpacity,
  Text, View} from 'react-native';
  
  import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
  //components
  import ProfileScreen from './components/Profile'
  import RewardsScreen from './components/Rewards'
  import RewardDetailScreen from './components/RewardDetail'
  import ActivitiesScreen from './components/Activities'
  import AchievementsScreen from './components/Achievements'
  import AchievementDetailScreen from './components/AchievementDetail'
  import ActivitiesDetailScreen from './components/ActivityDetail'
  import HomeScreen from './components/Home'
class App extends Component{
  static navigationOptions ={
    title: 'Welcome to Code Mill'
  }
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./images/login.jpeg')}
      style={styles.welcomeImage}/>
      <Text style={styles.welcomeText}>Welcome to Codemill Classics</Text>
        <TouchableOpacity
        style={styles.login}>
          <Text style={styles.loginText}
           onPress={() => this.props.navigation.navigate('Login')}
           >Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'normal',
    paddingTop: 100,
  },
  login:{
    height: 40,
    backgroundColor: '#333',
    width: '80%',
    borderRadius: 20,
    margin:4
  },
  loginText:{
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    padding: 4,
    
  },

  welcomeImage:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  welcomeText:{
    fontSize: 26,
    color: 'white',
    position: 'absolute',
    top: 100,
    bottom: -100,
  }
});


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  
});

const ActivitiesStack = createStackNavigator({
  Activities: ActivitiesScreen,
  ActivitiesDetail: ActivitiesDetailScreen
});

const AchievementsStack = createStackNavigator({
  Achievements: AchievementsScreen,
  AchievementDetail: AchievementDetailScreen
});

 const RewardsStack = createStackNavigator({
   Rewards: RewardsScreen,
   RewardDetail: RewardDetailScreen


 });

const ProfileStack = createStackNavigator({
  Profile : ProfileScreen
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Activities: ActivitiesStack,
    Achievements: AchievementsStack,
    Profile : ProfileStack,
    Rewards: RewardsStack

  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      fontSize: 26,
      

  style:{
    height: 40,
    backgroundColor: '#2c3e50',
    borderWidth: 1,
    borderColor: '#fff'

  },
  labelStyle:{
    color: '#fff',
  },
  headerTintColor:{
    color: 'red'
  }

    },
     
  }
));

