import multer from "multer";
import firebase from "firebase-admin";
// import serviceAccount from "../utils/samba-stats-firebase-adminsdk-8jaaw-ebdac7b9d5.json" assert { type: "json" };
// Initialize Firebase
firebase.initializeApp({
  // credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://notify-a7382-default-rtdb.firebaseio.com",
  storageBucket: "notify-a7382.appspot.com",
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