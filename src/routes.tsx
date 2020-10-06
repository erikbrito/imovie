import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/home'
import Trending from './pages/trending'
import Discover from './pages/discover'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Trending" component={Trending} />
        <AppStack.Screen name="Discover" component={Discover} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes