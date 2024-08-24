import mongoose from "mongoose";


const appDbContext = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error: ", error);
    }
};


export default appDbContext;