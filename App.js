/**
 * Timer React Native App
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './reactnative/components/SplashScreen';
import HomeScreen from './reactnative/components/HomeScreen';
import TimerScreen from './reactnative/components/TimerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={
            { 
              title : "Timer",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor : "#8BC34A"
              } 
            }}
        />
        <Stack.Screen
          name="TimerScreen"
          component={TimerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
