import mongoose, {Schema} from "mongoose";

const converstionSchema = new Schema(
    {
        participents:[
            {
            type:Schema.Types.ObjectId,
            ref:"User",
            }
        ],
        messages:[
            {
            type:Schema.Types.ObjectId,
            ref:"Message",
            default:[]
            }
        ],
        
    },
    {timestamps: true}
)

export const Converstion = mongoose.model("Converstion", converstionSchema)