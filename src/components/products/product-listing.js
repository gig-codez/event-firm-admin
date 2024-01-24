
import { monthsMapper, productTableHeaders } from "@/utils/config";
import "firebase/compat/database";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import Table from "../Table";
import React from "react";
import { firebaseConfig } from "../../../global";
// async function extractAllProducts() {
//   const res = await fetch("http://localhost:3000/api/product/all-products", {
//     method: "GET",
//     cache: "no-store",
//   });

//   const data = await res.json();

//   return data;
// }
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
// const [posts, setPosts] = React.useState([]);
let posts = [];
 const dbData = await fetchData();

   posts = (dbData);

  return (
    <Table
      tableHeaderText="All Products Overview"
      columns={productTableHeaders}
      data={
        posts && posts.length
          ? posts.map((item) => ({
              ...item,
              revenue: parseInt(item.Price),
              month: monthsMapper[item.month],
            }))
          : []
      }
    />
  );
}
