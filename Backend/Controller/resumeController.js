import multer from "multer";
import Resume from "../Models/resumeSchema.js";
import { analyze } from "../Services/service.js";
import fs from "fs";
import cloudinary from "./cloudinary.js";
import { PDFParse }  from 'pdf-parse';
import dotenv from 'dotenv'; 
dotenv.config();




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync("uploads")) {
            fs.mkdirSync("uploads");
        }
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

export const upload = multer({ storage: storage });



export const response = async ( req , res) => {
    const localFilePath = req.file?.path;
    try {
        console.log('BODY:', req.body)
        console.log('FILE RECEIVED:', req.file)
        console.log('CONTENT-TYPE:', req.headers['content-type'])
        
        const file = req.file;
        if (!file){
            return res.status(400).json({success:false,message:'File Not Uploaded'})
        }

        
        let text = "";
        let cloudinaryUrl = "";

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto", 
            folder: "resumes", 
        });
        
        cloudinaryUrl = result.secure_url;
        
        const fileBuffer = fs.readFileSync(localFilePath);

        if (req.file.mimetype === "application/pdf") {
            const parser = new PDFParse({ data : fileBuffer});
            const result = await parser.getText();
            await parser.destroy();
            text = result.text;
            console.log(text)
        } else {
            text = fileBuffer.toString("utf-8");
        }

        const aiResponse = await analyze(text)

        const doc = await Resume.create({
            name: aiResponse.name || "",
            email: aiResponse.email || "",
            resumeText: text,
            resumeUrl: cloudinaryUrl,
            AIresponse: aiResponse,
        });

        res.status(200).json({success:true,message:'File Uploaded',data: doc.AIresponse,fileUrl: doc.resumeUrl})

    
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:'Server Error'})
    }
}