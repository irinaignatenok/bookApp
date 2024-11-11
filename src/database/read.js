import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from './config';

// Function to load the entire book list
export async function load() {
    const querySnapshot = await getDocs(collection(db, 'BookList'));
    return processQuerySnapshot(querySnapshot);
}

// Function to load borrowed books for each user
export async function loadBorrowedBooks() {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        return processQuerySnapshot(querySnapshot);
    } catch (error) {
        console.error("Error fetching borrowed books:", error);
        throw error;
    }
}

// Function to load a specific book by ID
export async function loadBookById(bookId) {
    const docRef = doc(db, "BookList", bookId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        return null;
    }
}

// Helper function to process the Firestore query snapshot
function processQuerySnapshot(querySnapshot) {
    const data = [];
    querySnapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id
        });
    });
    return data;
}
export async function loadUserWithBooks(currentUserId) {
    try {

        const userDocRef = doc(db, 'users', currentUserId);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            throw new Error("User does not exist");
        }

        const userData = userDoc.data();

        // Fetch the details of borrowed books
        const booksDetailsPromises = userData.borrowedBooks.map(async (bookId) => {
            console.log("Fetching book with ID:", bookId);
            const bookDocRef = doc(db, 'BookList', bookId);
            const bookDoc = await getDoc(bookDocRef);
            return bookDoc.exists() ? { id: bookDoc.id, ...bookDoc.data() } : null;
        });

        const booksDetails = await Promise.all(booksDetailsPromises);
        return { ...userData, borrowedBooks: booksDetails.filter(book => book !== null) };
    } catch (error) {
        console.error("Error loading user with books:", error);
        throw error;
    }
}