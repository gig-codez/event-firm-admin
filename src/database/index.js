import mongoose from "mongoose";

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:Emmir1998@cluster0.i1tzamf.mongodb.net/eventfirmafrica?retryWrites=true&w=majority"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
