import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store  from './Redux/store';

import Home from './pages/home';
import Trending from './pages/trending';
import About from './pages/about';

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Trending" component={Trending} />
          <AppStack.Screen name="About" component={About} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  )

}

export default Routes