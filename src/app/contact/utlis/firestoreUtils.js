const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const { firebaseApp } = require('../../../../config'); 
const sendToFirestore = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = collection(db, 'contacts');
    await addDoc(docRef, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error sending data to Firestore:', error);
  }
};
module.exports = { sendToFirestore };
