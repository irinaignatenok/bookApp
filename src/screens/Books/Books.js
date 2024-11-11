// src/screens/Books/Books.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetail from '../../components/BookList/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';

const Stack = createNativeStackNavigator();

export default function Books({ books }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name="BookList"
                options={{ title: "Booking List" }}
            >
                {(props) => (
                    <BookList
                        {...props}
                        books={books}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="BookDetail"
                options={{ title: 'Booking Detail' }}
            >
                {(props) => (
                    <BookDetail
                        {...props}
                        books={books}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}