// App.js

import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Books from './src/screens/Books/Books';
import Borrowed from './src/screens/Borrowed/Borrowed';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Books"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            )
          }}
          component={Books}
        />
        <Tab.Screen
          name="Borrowed"
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color={color} />
            )
          }}
          component={Borrowed}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});