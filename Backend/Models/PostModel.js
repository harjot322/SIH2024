import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    price : {
        type: Number,
        required: true
    },
    image : {
        type: String
    },
    address : {
        type: String,
        required: true
    },
    state : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    temperature : {
        type: Number

    },
    area : {
        type: Number,
        required: true

    },
    transportation : {
        type: Boolean,
        default : false
    },
    pestControl : {
        type: Boolean,
        default : false
    },
    
    electricityAndWaterSupply : {
        type: Boolean
    },
    shelter : {
        type: Boolean
    },
    latitude : {
        type: Number,
        required: true,
        default: 28.7041
    },
    longitude : {
        type: Number,
        required: true,
        default: 77.1025
    },
    policy : {
        type: String,


    },
    highway : {
        type: String,
        default : "NULL"

    },
    bank : {
        type: String,
        default : "NULL"
    }
},{
    timestamps:true
});


const Post = mongoose.model('Post', postSchema);

export default Post;