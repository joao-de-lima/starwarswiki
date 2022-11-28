import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Home,
  SplashScreen,
  Detail,
  SearchScreen,
  FavoritesScreen,
  WatchScreen,
} from '../screens'
import { BottomBar } from '~/components'

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Watch" component={WatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
