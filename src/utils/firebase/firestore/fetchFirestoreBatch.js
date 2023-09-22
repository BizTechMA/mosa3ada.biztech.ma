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

async function fetchFirestoreInitialBatch(collectionName) {
  let results = [];
  let lastKey = "";
  let firstKey = "";
  try {
    let q = query(
      collection(db, collectionName),
      orderBy('date', 'desc'),
      limit(9)
    )
    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((doc) => {
      results.push({ id: doc.id, data: doc.data() });
      lastKey = doc.data().date;
    });
    if (results.length > 0) {
      firstKey = results[0].data.date;
    }
    console.log(firstKey);
  } catch (e) {
    console.error("Error retrieving documents:", e);
  }

  return { results, lastKey, firstKey };
}

async function fetchFirestoreNextBatch(collectionName, key) {
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


export { fetchFirestoreInitialBatch, fetchFirestoreNextBatch };

