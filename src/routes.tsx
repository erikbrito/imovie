import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PaperProvider, MD3LightTheme } from 'react-native-paper'

import { Provider } from 'react-redux'
import store from './Redux/store'

import Home from './Pages/home'
import Search from './Pages/search'
import About from './Pages/about'

const theme = {

  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1f1d1d',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
}

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <AppStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#1f1d1d',
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
                backgroundColor: '#1f1d1d'
              }
            }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Search" component={Search} />
            <AppStack.Screen name="About" component={About} />
          </AppStack.Navigator>
        </NavigationContainer>

      </PaperProvider>
    </Provider>
  )

}

export default Routes