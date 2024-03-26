import { User } from "../models/user.model.js";

export const getUserForSideBar =async(req, res)=>{
    try {
        const loggedInUser = req.user?._id
        const filteredUser = await User.find({_id: { $ne:loggedInUser }}).select("-password")
        res.status(201).json(filteredUser)
    } catch (error) {
        console.error("error in getUserForSideBar controller", error.message, error);
        res.status(500).json({ error: "internal server error"});
    }
}