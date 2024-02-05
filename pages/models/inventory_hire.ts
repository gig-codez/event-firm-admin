import { Schema, model }  from "mongoose";

const inventoryHireSchema = new Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:'',
        required:false,
    },
    category:{
        type:String,
        required:true,
    },quantity:{
        type:Number,
        required:true,
    }, price: {
        type: Number,
        required: true,
    },condidtion:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
});

export default model('InventoryHire', inventoryHireSchema);
