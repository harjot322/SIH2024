import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

dotenv.config();

console.log("Gemini Controller");





const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const fileManager = new GoogleAIFileManager(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
        mimeType,
        displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
}

const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 1024,
    responseMimeType: "text/plain",
};

export const plantCare = async (req, res) => {
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    // const prompt = "Create a plant care guide for a plant that needs a lot of sunlight.";
        // const result = await model.generateContent(prompt);
        // const response = await result.response;

        // const data = response.text();


    try {

        console.log("Plant Care");

        const {promp} =  req.body;

        

        const image = req.files.image[0].path;
        console.log("Image", image);


        const files = [
            
                
            await uploadToGemini(image, "image/jpeg"),
        ];

        const chatSession = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            fileData: {
                                mimeType: files[0].mimeType,
                                fileUri: files[0].uri,
                            },
                        },
                        { text: "Do you know what plant this is? How do I best take care of it? " },
                    ],
                },
            ],
        });

        const result = await chatSession.sendMessage(promp);

        const data = result.response.text();
        return res.status(200).json({ status: 200, data });





    } catch (error) {

        return res.status(500).json({ status: 500, message: error.message });

    }



}

