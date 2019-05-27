import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './components/Login'
  import Profile from './components/Profile'
  import Rewards from './components/Rewards'
  import ActivitiesScreen from './components/Activities'
  import Achievements from './components/Achievements'
  import ActivityDetail from './components/ActivityDetail'
  import HomeScreen from './components/Home'
const AppNavigator = createStackNavigator({
    App: {
      screen: App
    },
    Login:{
      screen: Login
    },
    Profile:{
      screen: Profile
    },
    Rewards:{
      screen: Rewards
    },
    Activities:{
      screen: ActivitiesScreen
    },
    Achievements:{
      screen: Achievements
    },
    Home: {
      screen: Home
    },
    ActivityDetail:{
      screen: ActivityDetail
    }
  
  });
export default createAppContainer(AppNavigator);