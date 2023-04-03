import { View, Text } from 'react-native'
import React from 'react'
import Profile from './src/screens/Profile'
import Inbox from './src/screens/Inbox'
import Login from './src/screens/Login'
import Lunch from './src/screens/Lunch'
import Order from './src/screens/Order'
import DateTime from './src/screens/DateTime'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Congratulations from './src/screens/Congratulations'



const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Profile'>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lunch" component={Lunch} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App