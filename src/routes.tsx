/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider, MD3LightTheme } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Fontisto from '@expo/vector-icons/Fontisto'
import Feather from '@expo/vector-icons/Feather'
import { ThemeProvider } from 'styled-components/native'

import Theme from '@Globals/theme/Theme'

import { Provider } from 'react-redux'
import store from 'src/redux/Store'

import Home from '@Screens/home/HomePage'
import Search from '@Screens/discover/DiscoverPage'
import About from 'src/screens/about/AboutPage'
import AboutMe from '@Screens/about-me/AboutMePage'

const theme = {
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: Theme.COLORS.TERTIARY,
    secondary: Theme.COLORS.SECONDARY,
    tertiary: Theme.COLORS.TERTIARY
  }
}

const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator()

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 90, height: 50 }}
      source={require('@Assets/logo.png')}
    />
  )
}

function MyStack() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.COLORS.PRIMARY
        },
        headerTintColor: Theme.COLORS.TERTIARY,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          flex: 1,
          fontWeight: 'bold',
          color: Theme.COLORS.TERTIARY,
          marginTop: 15
        },
        cardStyle: {
          backgroundColor: Theme.COLORS.PRIMARY
        }
      }}
    >
      <AppStack.Screen
        name="homePage"
        component={Home}
        options={{ headerTitle: (props: any) => <LogoTitle {...props} /> }}
      />
      <AppStack.Screen name="About" component={About} />
      <AppStack.Screen name="Search" component={Search} />
      <AppStack.Screen name="About Me" component={AboutMe} />
    </AppStack.Navigator>
  )
}

const Routes = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarStyle: {
                  position: 'absolute',
                  backgroundColor: '#1f1d1d',
                  elevation: 0,
                  height: 70
                },
                tabBarItemStyle: {
                  borderRadius: 20,
                  padding: 10
                },
                headerShown: false,
                tabBarActiveTintColor: Theme.COLORS.TERTIARY,
                tabBarInactiveTintColor: Theme.COLORS.SECONDARY,
                tabBarActiveBackgroundColor: Theme.COLORS.SECONDARY,
                // tabBarInactiveBackgroundColor : Theme.COLORS.TERTIARY,
                tabBarLabelStyle: {
                  // color: Theme.COLORS.TERTIARY,
                  fontSize: 15
                }
              }}
            >
              <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                  // tabBarLabel: 'Home',
                  headerTitle: (props: any) => <LogoTitle {...props} />,
                  tabBarIcon: ({ color }) => (
                    <Fontisto name="home" color={color} size={22} />
                  )
                }}
              />
              <Tab.Screen
                name="About Me"
                component={AboutMe}
                options={{
                  // tabBarLabel: 'About',
                  tabBarIcon: ({ color }) => (
                    <Feather name="info" color={color} size={22} />
                  )
                  // tabBarBadge: 3,
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </PaperProvider>
    </Provider>
  )
}

export default Routes
