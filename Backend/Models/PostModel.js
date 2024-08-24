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
        type: String
    },
    state : {
        type: String
    },
    city : {
        type: String
    },
    temperature : {
        type: Number
    },

},{
    timestamps:true
});


const Post = mongoose.model('Post', postSchema);

export default Post;