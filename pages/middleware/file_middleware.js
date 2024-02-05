import multer from "multer";
import firebase from "firebase-admin";
import serviceAccount from "./event-firm-firebase-adminsdk-m65fi-76be8c9a06.json" assert { type: "json" };
// Initialize Firebase
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://event-firm-default-rtdb.firebaseio.com/",
  storageBucket: "event-firm.appspot.com",
});

const uploadManager = () => {
  const storageConfig = multer.memoryStorage();
  const upload = multer({
    storage: storageConfig
  });
  // Upload the image to Firebase Storage
  return upload;
}
// Multer configuration for file uploads

export default uploadManager;