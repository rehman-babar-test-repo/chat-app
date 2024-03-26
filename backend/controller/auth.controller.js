// import {ApiError} from '../utils/apiError.js'
import {User} from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import genratreTokenAndSetCookie from '../utils/jwtTokens.js';

export const signup =async (req, res)=>{
    try {
        const {fullName, userName, password, confermPassword, gender} = req.body;
        
        if (confermPassword !== password) {
            return res
            .status(500)
            .json({error:"password do not match"})
            // throw new ApiError(500, "password do not match")
        }
        const user = await User.findOne({ userName })
        if (user) {
            return res
            .status(400)
            .json({error:"user already exist"})
        }

        const  boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const  girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const salt =await bcrypt.genSalt(10)
        const hashPassword =await bcrypt.hash(password, salt)

    const newUser = new User({
        fullName,
        userName,
        password: hashPassword,
        gender,
        profilePic: gender === "male"? boyProfilePic : girlProfilePic
    })
    
    if (newUser) {
        genratreTokenAndSetCookie(newUser?._id, res)
        await newUser.save();
        return res
        .status(200)
        .json({
            _id: newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        })
                }else{return res.status(400).json({error:"invalled user data"})}
    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({error: "internal server error"})
    }
}

export const login = async (req, res) => {
	try {
		const { userName, password } = req.body;
		const user = await User.findOne({ userName });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		genratreTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout =(req, res)=>{            
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message:"logged out Successfully"})
    } catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({error: "internal server error"})
    }
}