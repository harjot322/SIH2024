import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import appDbContext from './DB/appDbContext.js';

import authRoutes from './Routes/auth.routes.js';
import messageRoutes from './Routes/messages.routes.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');

});
app.listen(5000,()=>{
    appDbContext();
    console.log(`Server is running on port http://localhost:${PORT}`);
})