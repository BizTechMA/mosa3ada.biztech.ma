import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter
} from "firebase/firestore";
import firebase_app from "../../../../config";

export const db = getFirestore(firebase_app);

export default async function fetchFirestoreNextBatch(collectionName, key) {
  let results = [];
  let lastKey = "";
  try {
    let q = query(
      collection(db, collectionName),
      orderBy('date', 'desc'),
      startAfter(key),
      limit(9)
    )
    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
      lastKey = doc.data().date;
    });
  } catch (e) {
    console.error("Error retrieving documents:", e);
  }

  return { results, lastKey };
}
