import { View, Text, Pressable, FlatList, Image } from 'react-native';
import * as database from '../../database/index';
import { useEffect, useState } from 'react';
import { db } from '../../database/config';
import styles from './styles';

export default function BookList({ navigation }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await database.load();
                console.log("Loaded data:", data);
                setBooks(data);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        loadData();
    }, []);

    const handleBookPress = (item) => {
        navigation.navigate('BookDetail', { book: item });
    };

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.itemContainer} onPress={() => handleBookPress(item)}>
                <Image source={{ uri: item.coverImage }} style={styles.itemImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemAuthor}>{item.author}</Text>
                </View>
            </Pressable>
        );
    };

    const renderSeparator = () => {
        return <View style={styles.separator} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
}