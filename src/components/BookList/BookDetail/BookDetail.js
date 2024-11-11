import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, Alert } from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';
import { loadBookById, loadBorrowedBooks } from '../../../database/index';
import { db } from '../../../database/config';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export default function BookDetail({ route, navigation }) {
    const { bookId } = route.params;
    const [book, setBook] = useState(null);
    const [user, setUser] = useState({ borrowedBooks: [] });
    const currentUserId = 'HAG5HmS6ud4uJwN3Cu9W';

    useEffect(() => {
        const fetchBookDetails = async () => {
            const bookData = await loadBookById(bookId);
            setBook(bookData);
        };

        const fetchUserData = async () => {
            const borrowedBooksData = await loadBorrowedBooks();
            const currentUserData = borrowedBooksData.find(user => user.id === currentUserId);
            if (currentUserData) {
                setUser(currentUserData);
            } else {
                setUser({ borrowedBooks: [] });
            }
        };

        fetchBookDetails();
        fetchUserData();
    }, [bookId]);

    // Maximum allowed borrowed books
    const handleBorrowBooks = async () => {
        // Check if the user already borrowed 3 books
        if (user.borrowedBooks.length >= 3) {
            Alert.alert("Error", "You cannot borrow more than three books.");
            return;
        }

        // Check if the book is already borrowed
        if (user.borrowedBooks.includes(book.id)) {
            Alert.alert("Error", "You have already borrowed this book.");
            return;
        }

        // Update Firestore with the borrowed book
        await updateDoc(doc(db, 'users', currentUserId), {
            borrowedBooks: arrayUnion(book.id)
        });

        // Update UI
        setUser(prevState => ({
            ...prevState,
            borrowedBooks: [...prevState.borrowedBooks, book.id]
        }));
        Alert.alert("Success", "You have borrowed the book!");
        navigation.navigate('BookList');
    };

    if (!book) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                <Feather name="arrow-left" size={20} color="#007BFF" />
                <Text style={styles.backButtonText}> Book List</Text>
            </Pressable>

            <View style={styles.itemContainer}>
                <Image source={{ uri: book.coverImage }} style={styles.itemImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.bookName}>{book.name}</Text>
                    <Text style={styles.bookAuthor}>{book.author}</Text>
                    <Text style={styles.bookRating}>{book.rating}</Text>
                    <Text style={styles.bookSummary}>Summary: {book.summary}</Text>
                    <Pressable style={styles.button} onPress={handleBorrowBooks}>
                        <Text style={styles.buttonText}>Add to My List</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}