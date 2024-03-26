import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema(
    {
        message:{
            type:String,
            required: true
        },
        senderId:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        recevirId:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required: true
        }
    },
    {timestamps: true}
)

export const Message = mongoose.model("Message", messageSchema)