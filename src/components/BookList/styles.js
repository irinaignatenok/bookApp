// import { StyleSheet } from 'react-native';


// export default StyleSheet.create({
//     itemContainer: {
//         padding: 15,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         backgroundColor: '#f9f9f9',
//         borderRadius: 10,
//         elevation: 3, // For Android shadow
//         shadowColor: '#000', // For iOS shadow
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.2,
//         shadowRadius: 1,
//     },
//     itemName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     itemAuthor: {
//         fontSize: 14,
//         color: '#555',
//     },
//     itemImage: {
//         width: 50,
//         height: 75,
//         borderRadius: 5,
//         marginRight: 10,
//     },
// })

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'colomn',
        alignItems: 'center',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    itemImage: {
        width: '66%', // 2/3 of the row
        height: 150, // Adjust height as needed
        borderRadius: 5,
    },
    textContainer: {
        flex: 1, // Allow text container to take the remaining space
        paddingLeft: 10,
        paddingTop: 10 // Add some space between image and text
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemAuthor: {
        fontSize: 14,
        color: '#555',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 16,
    },
});

export default styles;