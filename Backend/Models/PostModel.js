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
    state : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    
    area : {
        type: Number,
        required: true

    },
    extras : {
        type: "String",
        
    },
    deliveryexpected : {
        type : "String",
        required : true,
        default : "1-2 Month"
    },
    quantity : {
        type: Number,
        required: true,
    },
    policy : {
        type: String,

    },
},{
    timestamps:true
});


const Post = mongoose.model('Post', postSchema);

export default Post;