import { User } from '../Models/user.model.js';
import Address from '../Models/address.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiErrors } from '../utils/ApiErrors.js';
import { ApiResponse } from '../utils/ApiResponse.js';



const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();
    
        // console.log("😢 Can't reach here")

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });    

        return { accessToken, refreshToken }
    } catch (err) {
        throw new ApiErrors(500, "Server Error");
    }
}

const register = asyncHandler(async (req, res) => {
    const { name, email, password, contactNumber, address } = req.body
    // console.log("\n", req.body)
    if (
        [name, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiErrors(400, "Please fill all the fields");
    }

    const existedUser = await User.findOne({ email })

    if (existedUser) {
        throw new ApiErrors(409, "User Already Exist with same Username or Email!!")
    }

    let userAddress;
    if (address) {
        userAddress = await Address.create({
            street: address.street,
            city: address.city,
            state: address.state,
            country: address.country,
            postalCode: address.postalCode,
        })
        await userAddress.save();
    }

    const user = await User.create({
        name: name,
        email: email,
        password: password,
        contactNumber: contactNumber,
        address: userAddress,
    })

    await user.save();

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiErrors(500, "Something went wrong while creating a new user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered successfully 😊")
    )

})

const login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email){
            throw new ApiErrors(400, "Please enter email")
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiErrors(400, "user Not found!!")
        }

        const passwordMatch = await user.isPasswordCorrect(password);
        if (!passwordMatch) {
            throw new ApiErrors(400, 'Invalid email or password');
        }

        const {accessToken,refreshToken} = await generateAccessAndRefreshTokens(user._id);

        const loggedInUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        const options = {
            httpOnly: true,
            secure: true
        }

        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User Logged In Successfully"
            )
        )

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

const logout = asyncHandler(async (req, res) => {
    
})

const updateUser = asyncHandler(async (req, res) => {
    // Implement user registration logic

})

const deleteUser = asyncHandler(async (req, res) => {
    // Implement user registration logic

})



const getCurrentUser = asyncHandler(async (req, res) => {

})

export {
    register,
    login,
    updateUser,
    deleteUser,
    logout,
    getCurrentUser
};
