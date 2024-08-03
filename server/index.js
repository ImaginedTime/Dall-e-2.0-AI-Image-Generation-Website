import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
    res.send('Hello from dall-e');
});


mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log(err);
});