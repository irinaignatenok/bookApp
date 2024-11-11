// App.js
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Books from './src/screens/Books/Books';
import Borrowed from './src/screens/Borrowed/Borrowed';
import * as database from './src/database/index'; // Adjust path as needed
import { enableScreens } from 'react-native-screens';
enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const loadBooks = async () => {
    try {
      const data = await database.load();
      console.log("Loaded data:", data);
      setBooks(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBorrowedBooks = async () => {
    try {
      const data = await database.loadBorrowedBooks();
      console.log("Loaded data:", data);
      setBorrowedBooks(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadBorrowedBooks();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Books"
        >
          {(props) => (
            <Books
              {...props}
              books={books}
            />
          )}
        </Tab.Screen>


        <Tab.Screen
          name="Borrowed"
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color={color} />
            )
          }}
        >
          {(props) => (
            <Borrowed
              {...props}
              currentUserId="HAG5HmS6ud4uJwN3Cu9W"
            />
          )}
        </Tab.Screen>
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