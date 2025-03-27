import express from 'express';
import authRoute from './src/routes/authroutes.js'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API Gateway');
});

app.use('/api/auth', authRoute);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
});


