import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Image, ActivityIndicator, Alert } from 'react-native';
import styles from './styles';
import { loadUserWithBooks } from '../../database/index';
import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from '../../database/config'

export default function Borrowed({ currentUserId }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const userDocRef = doc(db, 'users', currentUserId);

        // Update UI at the reat time
        const unsubscribe = onSnapshot(userDocRef, async (userDoc) => {
            if (userDoc.exists()) {
                const userWithBooks = await loadUserWithBooks(currentUserId);
                setUserData(userWithBooks);
            } else {
                console.log("User does not exist");
                setUserData(null);
            }
            setLoading(false);
        }, (error) => {
            console.error("There is an error:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [currentUserId]);

    const handleReturnBook = async (bookId) => {
        // Return a book
        Alert.alert(
            "Return Book",
            "Are you sure you want to return this book?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: async () => {
                        // Remove the book from the users collection in Firebase
                        const userDocRef = doc(db, 'users', currentUserId);
                        await updateDoc(userDocRef, {
                            borrowedBooks: arrayRemove(bookId)
                        });


                        setUserData(prevState => ({
                            ...prevState,
                            borrowedBooks: prevState.borrowedBooks.filter(id => id !== bookId)
                        }));
                        Alert.alert("Success", "Book returned successfully.");
                    }
                }
            ]
        );
    };

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.itemContainer}>
                <Image source={{ uri: item.coverImage }} style={styles.itemImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemAuthor}>{item.author}</Text>
                </View>
                <Pressable style={styles.returnButton} onPress={() => handleReturnBook(item.id)}>
                    <Text style={styles.buttonText}>Return</Text>
                </Pressable>
            </Pressable>
        );
    };

    const renderSeparator = () => {
        return <View style={styles.separator} />;
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!userData || !userData.borrowedBooks || userData.borrowedBooks.length === 0) {
        return <Text>No borrowed books found.</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={userData.borrowedBooks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
}