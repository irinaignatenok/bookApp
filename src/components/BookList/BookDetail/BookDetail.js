import { View, Text, Button, Pressable, Image } from 'react-native';
import styles from './styles';
import Feather from '@expo/vector-icons/Feather';

export default function BookDetail({ route, navigation }) {
    const { book } = route.params;
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                <Feather name="arrow-left" size={20} color={"#007BFF"} />
                <Text style={styles.backButtonText}> Book List</Text>
            </Pressable>

            <View style={styles.itemContainer}>
                <Image source={{ uri: book.coverImage }} style={styles.itemImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.bookName}> {book.name}</Text>
                    <Text style={styles.bookAuthor}> {book.author}</Text>
                    <Text style={styles.bookRating}> {book.rating}</Text>
                    <Text style={styles.bookSummary}>Summary: {book.summary}</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Add to My List</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}