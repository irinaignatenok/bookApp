// src/screens/Books/Books.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetail from '../../components/BookList/BookDetail/BookDetail';
import BookList from '../../components/BookList/BookList';

const Stack = createNativeStackNavigator();

export default function Books() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name="BookList"
                options={{ title: "Booking List" }}
                component={BookList}
            />
            <Stack.Screen
                name="BookDetail"
                options={{ title: 'Booking Detail' }}
                component={BookDetail}
            />
        </Stack.Navigator>
    );
}