import Post from '../Models/PostModel.js';

export const createRequest = async (req, res) => {

    try {
        const { title, description, price , address, state, city , temperature ,area } = req.body;
        
        const userId = req.user._id;
        
        if(!title || !description || !price || !address || !state || !city || !temperature || !area){
            
            return res.status(400).json({status : 400 , message: "All fields are required"});
            
        }
        console.log("Request received");
        const image = req.files.image[0].path.replace(/^Uploads\//, '').trim();
        console.log(image);
        if(!image){

            return res.status(400).json({status : 400 , message: "Image is required"});
        
        }
        
        const post  = await Post.create({
            title,
            description,
            price,
            creator: userId,
            image,
            address,
            state,
            city,
            temperature,
            area
        });
        if(!post){
        
            return res.status(400).json({status : 400 , message: "Post not created"});
        
        }
        
        res.status(200).json({status : 200 , message: "Post created successfully"});

    } catch (error) {
        
        console.log(error);
        
    }
}

export const getPosts = async (req, res) => {
    try {
        // Initialize an empty query object
        const query = {};

        // Conditionally add query parameters
        
        if (req.query.city) query.city = req.query.city;
        
        if (req.query.state) query.state = req.query.state;
        
        if (req.query.temperature) query.temperature = req.query.temperature;
        
        if (req.query.area) query.area = req.query.area;
        
        if (req.query.minPrice || req.query.maxPrice) {
        
            query.price = {};
        
            if (req.query.minPrice) query.price.gte = parseInt(req.query.minPrice);
        
            if (req.query.maxPrice) query.price.lte = parseInt(req.query.maxPrice);
        
        }

        // Fetch posts based on the constructed query
        const posts = await Post.find(query);

        if (!posts) {
        
            return res.status(400).json({ status: 400, message: "No posts found" });
        
        }

        return res.status(200).json({ status: 200, posts });

    } catch (error) {
        
        return res.status(500).json({ status: 500, message: "Server error", error: error.message });
    
    }

};

export const getPost = async (req, res) => {

    try {

        
        const post = await Post.findOne(
            {
                _id : req.params.id
            }
        );

        if(!post){
        
            return res.status(400).json({status : 400 , message: "No post found"});
        
        }

        return res.status(200).json({status : 200 , post});

    } catch (error) {
        
        return res.status(500).json({status : 500 , message: error.message});
        
    }
}

export const deletePost = async (req, res) => {

    try {

        const post = await Post.findOneAndDelete(
            {
                _id : req.params.id
            }
        );

        if(!post){
        
            return res.status(400).json({status : 400 , message: "No post found"});
        
        }

        return res.status(200).json({status : 200 , message: "Post deleted successfully"});
        
    } catch (error) {
        
        return res.status(500).json({status : 500 , message: error.message});

    }
} 