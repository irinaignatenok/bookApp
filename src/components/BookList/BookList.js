// BookList.js
import { View, Text, Pressable, FlatList, Image } from 'react-native';
import styles from './styles';


export default function BookList({ navigation, books }) {
    const handleBookPress = (item) => {
        navigation.navigate('BookDetail', { bookId: item.id });
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