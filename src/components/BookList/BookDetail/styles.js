import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
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
        width: 100,
        height: 150,
        borderRadius: 5,
    },
    textContainer: {
        paddingLeft: 15,
        flex: 1,
    },
    bookName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingBottom: 10
    },
    bookAuthor: {
        fontSize: 16,
        color: '#555',

    },
    bookRating: {
        fontSize: 14,
        color: 'orange'
        // color: '#888',
    },
    bookSummary: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    backButton: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    backButtonText: {
        color: '#007BFF',
        // fontWeight: 'bold',
        textAlign: 'center',
        // marginLeft: 8,
    },

})
