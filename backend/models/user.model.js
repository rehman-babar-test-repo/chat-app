import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        fullName:{
            type:String,
            required: true
        },
        userName:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true,
            minlength:6
        },
        gender:{
            type:String,
            required: true,
            enum:["male", "female"]
        },
        profilePic:{
            type:String,
            default: ""
        },
    }
    ,
    {timestamps: true}
    )

export const User = mongoose.model("User", userSchema)