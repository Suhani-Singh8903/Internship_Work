const express = require('express');
const cors = require('cors');
const cloudinary = require('./cloudinary/cloudinary');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({limit : '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/', async (req, res) => {
    const { image } = req.body;
    
    try {
        // Explicitly specify folder and public_id
        const uploadedImage = await cloudinary.uploader.upload(image, {
            // Specify folder explicitly
            folder: 'Pitch_data/',  // Note the trailing slash
            
            // Use a more dynamic public_id
            public_id: `pitch_${Date.now()}`,
            
            // Optional: Use upload preset if configured
            upload_preset: 'pitch_upload',
            
            // Allowed formats
            allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
            
            // Additional configuration
            resource_type: 'auto',
            overwrite: false
        });

        // Verify folder is set correctly
        console.log("Upload Result:", {
            public_id: uploadedImage.public_id,
            secure_url: uploadedImage.secure_url,
            format: uploadedImage.format,
            folder: uploadedImage.folder,  // Check this specifically
            path: uploadedImage.path       // Additional path info
        });

        res.status(200).json({
            message: "Image uploaded successfully",
            public_id: uploadedImage.public_id,
            url: uploadedImage.secure_url,
            folder: uploadedImage.folder
        });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({
            message: 'Error in uploading image',
            error: error.message
        });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});