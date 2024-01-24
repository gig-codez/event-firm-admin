

import "firebase/compat/database";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import Table from "../Table";
import React from "react";
import { firebaseConfig } from "../../../global";


const fetchData = async () => {
  try {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    // Fetch data from Firebase
    const snapshot = await firebase.database().ref("blogs/").once("value");
    const data = snapshot.val();

    const fetchedPosts = [];
    for (const [key, value] of Object.entries(data)) {
      fetchedPosts.push({ id: key, ...value });
    }

   return fetchedPosts;
  } catch (error) {
    throw error;
    // console.error("Error fetching data:", error.message);
  }
};
export default async function ProductListing() {
  
  let posts = await fetchData();
  return (
    <Table
      tableHeaderText="All Products Overview"
      data={posts}
    />
  );
}
