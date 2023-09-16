import { getFirestore, updateDoc, doc } from "firebase/firestore";
import firebase_app from "../../../../config";

export const db = getFirestore(firebase_app);

export const updateFieldInDocument =
  (collectionName) => async (docId, newValue) => {
    const docRef = doc(db, collectionName, docId);
    try {
      await updateDoc(docRef, {
        ...newValue,
      });

      console.log("Document updated successfully");
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };
