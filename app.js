import express from 'express';
import authRoute from './src/routes/authroutes.js';
import { config } from 'dotenv';
import { connectDB } from './src/config/db.js';

config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API Gateway');
});

app.use('/api/auth', authRoute);

const startServer = async () => {
    try {
        await connectDB(); 
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server is running on port localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start the server:', err);
    }
};

startServer();


