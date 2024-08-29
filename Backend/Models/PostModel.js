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
        type: Boolean
    },
    pestControl : {
        type: Boolean
    },
    
    electricityAndWaterSupply : {
        type: Boolean
    },
    shelter : {
        type: Boolean
    },
    latitude : {
        type: Number
    },
    longitude : {
        type: Number
    },
    policy : {
        type: String
    },
    highway : {
        type: String
    },
    bank : {
        type: String
    }
},{
    timestamps:true
});


const Post = mongoose.model('Post', postSchema);

export default Post;