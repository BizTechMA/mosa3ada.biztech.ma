import { getFirestore } from "firebase/firestore";
import firebase_app from "../../../../config";
  
export const db = getFirestore(firebase_app);

const fetchFirestoreDocs = async (_, nextPage = null) => {
    const batchSize = 10; 
    let query = db.collection('helps').orderBy('createdAt').limit(batchSize);
  
    if (nextPage) {
      query = query.startAfter(nextPage);
    }
  
    const querySnapshot = await query.get();
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    return { data, lastDoc };
  };
  

export default fetchFirestoreBatch;