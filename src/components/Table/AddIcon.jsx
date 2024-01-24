"use client";
import React from 'react';
// import admin from "firebase-admin";

import { Button } from "@mui/material";
import  Add  from "@mui/icons-material/Add";
import Modal from '../Modal';
import { productFormControls } from '@/utils/config';
import { firebaseConfig } from '../../../global';
import { initializeApp } from "firebase/app";
const AddIcon = () => {
    let app = null;
    React.useEffect(() => {
        // Firebase initialization
    initializeApp(firebaseConfig);
        // admin.initializeApp({
        //     credential: admin.credential.cert(firebaseConfig),
        //     databaseURL: "https://event-firm-default-rtdb.firebaseio.com/blogs"
        // });
      }, []);
    const data = {
        name: "h",
        description: "",
        location: "",
        price: 0,
        image: File,
      };
      app.
    const [showModal, setShowModal] = React.useState(false);
    const [formData, setFormData] = React.useState(data);
//   
function upload() {
    console.log(formData);
    // Get image name and create a reference to Firebase Storage
    var imageName = formData.image.name;
    admin.storage().bucket("images/").file(imageName).save(formData.image, {
        metadata: {
          contentType: req.file.mimetype,
        },
      }).then(() => {
        console.log("Image uploaded to Firebase Storage");
        const bucket = admin.storage().bucket();
        const file = bucket.file(imageName);
    //    let  uploadTask = firebase.database().ref("images/").push();
            // Track upload progress
                // Add data to Firebase Realtime Database
                file.getSignedUrl({ action: 'read', expires: '01-01-2100' }).then((url) => {
                    console.log(url[0]);
                    let downloadURL = url[0];
                    var postData = {
                        heading: formData.name,
                        text: formData.description,
                        imageURL: downloadURL,
                        Location: formData.location,
                        Price: formData.price,
                        link: "",
                      };
            
                      var postId = firebase.database().ref("blogs/").push().key;
                      var updates = {};
                      updates["/blogs/" + postId] = postData;
            
                      admin
                        .database()
                        .ref()
                        .update(updates, function (error) {
                          if (error) {
                            console.error("Error while uploading: " + error.message);
                          } else {
                            console.log("Successfully uploaded");
                            setFormData(data);
                            setShowModal(false);
                          }
                        });
                }).catch((error) => {
                    console.error(error);
                });
            
            
      })
    // Upload image to Firebase Storage
  }
//   
    return (
        <div>
        <Button variant="outlined" color="primary" title="Add" onClick={() => setShowModal(true)} ><Add sx={{mr:1}} /> Add Inventory</Button>
       
        <Modal
        show={showModal}
        setShow={setShowModal}
        formData={formData}
        setFormData={setFormData}
        formControls={productFormControls}
        onAdd={upload}
      />
        </div>
    );
};
export default AddIcon;