import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import path from 'path';

import cors from 'cors';
import appDbContext from './DB/appDbContext.js';

import authRoutes from './Routes/auth.routes.js';
import messageRoutes from './Routes/messages.routes.js';
import postRoutes from './Routes/post.routes.js';
import geminiRoutes from './Routes/gemini.routes.js';


const app = express();

dotenv.config();

app.use(cors({
    origin: true,
    
    credentials: true
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const filename= fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Routes
app.use('/uploads',express.static(path.join(dirname,'Uploads')));
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/posts',postRoutes);

app.use('/api/ai' , geminiRoutes )

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World');

});
app.listen(5000,()=>{
    appDbContext();
    console.log(`Server is running on port http://localhost:${PORT}`);
})