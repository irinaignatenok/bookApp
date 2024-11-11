import { View, Text, FlatList } from 'react-native';
import styles from './styles';

export default function Borrowed({ borrowedBooks }) {
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
                data={borrowedBooks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
}
