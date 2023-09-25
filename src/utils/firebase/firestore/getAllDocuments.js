import {
  collection,
  getDocs,
  getFirestore
} from "firebase/firestore";
import firebase_app from "../../../../config";

export const db = getFirestore(firebase_app);

export default async function getAllDocuments(collectionName) {
  const collectionRef = collection(db, collectionName);

  let results = [];
  try {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });
  } catch (e) {
    console.error("Error retrieving documents:", e);
  }

  return results;
}
