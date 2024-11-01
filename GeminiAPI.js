// Code to generate content using the Google Generative AI API
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAi = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_KEY);

const generateContent = async () => {
  const model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const r = await model.generateContent("Give me react code");
  console.log(await r.response.text());
};

generateContent();


// USER INPUT 


// import { GoogleGenerativeAI } from "@google/generative-ai";
// import readline from 'readline';

// // Initialize the Google Generative AI
// const genAi = new GoogleGenerativeAI("your api key ");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// const generateContent = async (input) => {
//   const model = genAi.getGenerativeModel({
//     model: "gemini-1.5-flash"
//   });

//   try {
//     const r = await model.generateContent(input);
//     console.log("Generated Content:\n", await r.response.text());
//   } catch (error) {
//     console.error("Error generating content:", error);
//   } finally {
//     rl.close(); 
//   }
// };

// // Prompt the user for input
// rl.question("Enter a topic for content generation: ", (input) => {
//   generateContent(input);
// });
