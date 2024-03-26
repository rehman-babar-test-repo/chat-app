import { Converstion } from "../models/converstion.model.js";
import { Message } from "../models/message.model.js";
import { getReceiverSocketId } from "../socket.io/socket.js";
import { io } from "../socket.io/socket.js";
export const sendMessage = async(req, res) => {
    try {
        const { message } = req.body;
        const { id: recevirId } = req.params;
        const senderId = req.user._id;
        
        let conversation = await Converstion.findOne({
            participents: { $all: [senderId, recevirId] }
        });

        if (!conversation) {
            conversation = await Converstion.create({
                participents: [senderId, recevirId]
            });
        }

        const newMessage = new Message({
            senderId,
            recevirId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await newMessage.save();
        // await conversation.save();
        await Promise.all([conversation.save(), newMessage.save()])

        const receiverSocketId = getReceiverSocketId(recevirId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

        res.status(200).json(newMessage);
    } catch (error) {
        console.log("error in message controller", error, error.message);
        res.status(500).json({ error: "internal server error" });
    }
};

export const getMessage = async(req, res)=>{
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const converstion = await Converstion.findOne({
            participents:{$all:[senderId, userToChatId]}
        }).populate("messages");

        if (!converstion) return res.status(200).json([])
        const messages = converstion.messages
        res.status(200).json(messages)

    } catch (error) {
        console.log("error in getmessage controller", error.message, error);
        res.status(500).json({ error: "internal server error" });
    }
}