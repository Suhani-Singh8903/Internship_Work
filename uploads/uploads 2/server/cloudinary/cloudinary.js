const cloudinary = require('cloudinary');
require("dotenv").config();

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// Optional: If you want to test upload
async function testCloudinaryUpload() {
    try {
        const uploadResult = await cloudinary.uploader.upload(
            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
                public_id: 'shoes',
            }
        );
        console.log(uploadResult);
    } catch (error) {
        console.error('Cloudinary upload error:', error);
    }
}

// Uncomment if you want to test upload on startup
// testCloudinaryUpload();

module.exports = cloudinary ;