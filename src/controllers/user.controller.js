import { asyncHandler } from "../utils/asyncHandler.utils.js";


const registerUser = asyncHandler( async(req,res) => {
    res.status(200).json({
        message:"Registration Successfull"
    })
})


export {
    registerUser
}