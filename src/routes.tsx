import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import store from './Redux/store'

import Home from './pages/home'
import Search from './pages/search'
import About from './pages/about'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#34314f',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              flex: 1,
              fontWeight: 'bold',
              color: '#fff',
              marginTop: 15
            },
            cardStyle: {
              backgroundColor: '#34314f'
            }
          }}>
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Search" component={Search} />
          <AppStack.Screen name="About" component={About} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  )

}

export default Routes