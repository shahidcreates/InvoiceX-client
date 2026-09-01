import axios from "axios";
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const uploadInvoiceThumbnail = async (imageData)=>{
    
    const formData = new FormData();
    formData.append("file",imageData);
    formData.append("upload_preset", 'invoice-thumbnail');
    formData.append('cloud_name',cloudName);
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData); 
    
    return response.data.secure_url;
}