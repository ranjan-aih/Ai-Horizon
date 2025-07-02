import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
 


const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 

const buildPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(buildPath))
console.log("buildPath----> ", buildPath)
// For any unknown routes, serve index.html (for React Router support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(3001, (req, res)=>{
    console.log('serevr is running')
})