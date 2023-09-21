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

export default async function fetchFirestoreBatch(collectionName, startAfterDoc = null, pageSize = 9) {
  let results = [];
  try {
    let q = query(
      collection(db, collectionName),
      orderBy('date', 'desc'),
      limit(pageSize)
    );
    if (startAfterDoc) {
      q = query(
        collection(db, collectionName),
        orderBy('date', 'desc'),
        startAfter(startAfterDoc),
        limit(pageSize)
      );
    }
    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
    });
  } catch (e) {
    console.error("Error retrieving documents:", e);
  }

  return results;
}
