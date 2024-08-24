import Conversation from "../Models/ConversationModel.js";
import Message from "../Models/MessageModel.js";


export const sendMessage = async (req, res) => {

    try {

        const receiverId = req.params.id;

        const {message} = req.body;

        const senderId = req.user._id;

        if(!message){
        
            return res.status(400).json({status : 400 , message: "Message is required"});
        
        }

        let ConversationBetweenUsers = await Conversation.findOne({
            members:{
                $all:[senderId,receiverId]
            }
        })

        if(!ConversationBetweenUsers){
            ConversationBetweenUsers = await Conversation.create({
                members : [senderId,receiverId]
            });
            console.log("true");
        }
        
        let newMessage = await Message.create({
            message,
            senderId,
            receiverId
        });
        
        if(!newMessage){
            
            return res.status(400).json({status : 400 , message: "Message not sent"});

        }

        ConversationBetweenUsers.messages.push(newMessage._id);

        await Promise.all([ConversationBetweenUsers.save(), newMessage.save()]);


        return res.status(200).json({status : 200 , message: "Message sent successfully" ,data : newMessage});




        
    } catch (error) {
        
        res.status(500).json({status : 500 , message: error.message});

    }
}


export const getMessages = async (req, res) => {
    try {

        const receiverId = req.params.id;

        const senderId = req.user._id;

        const ConversationBetweenUsers = await Conversation.findOne({
            members:{
                $all:[senderId,receiverId]
            }
        }).populate("messages");

        if(!ConversationBetweenUsers){
        
            return res.status(400).json({status : 400 , message: "No messages found" , data: []});
        
        }

        return res.status(200).json({status : 200 , data : ConversationBetweenUsers});
        
    } catch (error) {
        
        return res.status(500).json({status : 500 , message: error.message});

    }
}