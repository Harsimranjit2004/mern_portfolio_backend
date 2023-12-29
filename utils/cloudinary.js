// import {v2 as cloudinary} from cloudinary
// import fs from "fs"

// cloudinary.config({
//     cloud_name:'',
//     api_key:
//     api_seceret:
// })
// const uploadOnCloudinary = async (localFilePath)=>{
//     try{
//         if(!localFilePath) return null
//        const response =  await cloudinary.v2.uploader.upload(localFilePath,{
//             resource_type:"auto"
//         })
//         //file has been uploaded
//         return response

//     }catch(error){
//         fs.unlinkSync(localFilePath)
//         return null
//     }
// }

// export {uploadOnCloudinary}
