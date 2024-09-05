import User from '../Models/UserModel.js';


export const getUsers = async (req, res) => {
    try {
        const user = req.user;

        const users = await User.find({ _id: { $ne: user._id } });
        

        return res.status(200).json({
            status : 200,
            message: "Users fetched successfully",
            data: users
        });

    } catch (error) {
        
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        })

    }
}
