import { getFirestore, updateDoc, doc, setDoc} from "firebase/firestore";
import firebase_app from "../../../../config";

export const db = getFirestore(firebase_app);

export const updateFieldInDocument =
  (collectionName) => async (docId, newObj) => {
    const docRef = doc(db, collectionName, docId);

    try {
      await setDoc(docRef, {
        ...newObj,
      });
    
      console.log("Document updated successfully");
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };
