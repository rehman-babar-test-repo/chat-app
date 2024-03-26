import jwt from 'jsonwebtoken';
import { User } from "../models/user.model.js";

export const verifyUser = async (req, res, next) => {
    try {
        let token = req.cookies?.jwt || '';
        const authHeader = req.header("Authorization");
        
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.replace("Bearer ", "");
        }
        
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken?._id;

        if (!userId) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in verifyUser middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
