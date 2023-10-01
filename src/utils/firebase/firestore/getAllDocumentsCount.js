import {
    collection,
    getCountFromServer,
    getFirestore
} from "firebase/firestore";
import firebase_app from "../../../../config";

export const db = getFirestore(firebase_app);

export default async function getAllDocumentsCount(collectionName) {
    const collectionRef = collection(db, collectionName);

    let results;
    const limit = 9;
    try {
        const querySnapshot = await getCountFromServer(collectionRef);
        results = Math.round(querySnapshot.data().count / limit)
    } catch (e) {
        console.error("Error retrieving documents:", e);
    }
    return results;
}
