import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Follow from './screens/Follow';

const MainNavigator = createStackNavigator({
  Home : {screen: Home},
  Follow : {screen : Follow}
},{
  defaultNavigationOptions:{
    headerTintColor: "#FFF",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTitleStyle:{
      color: "#FFF"
    }
  }
})

const App =  createAppContainer(MainNavigator);
export default App;