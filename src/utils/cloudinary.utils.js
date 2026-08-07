import {v2 as cloudinary} from "cloudinary";
import { log } from "console";
import fs from "fs";


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async(localFilePath)=>{
    try{
        if (!localFilePath) return null;

        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })

        //file has been uploaded successfully
        //console.log("File has been uploaded successfully at: ", response.url);
        fs.unlinkSync(localFilePath);
        //console.log(response);
        return response;
    } catch(error){
        console.log(error);
        fs.unlinkSync(localFilePath); //removes the locally saved temporary file since the upload of the file failed.
        return null;
    }
}

export {
    uploadOnCloudinary
}