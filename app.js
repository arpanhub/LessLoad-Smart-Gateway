import express from 'express';
import 'dotenv/config';
import authRoute from './src/routes/authroutes';
const app =  express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.use('/api/auth',authRoute)

//for the server to lsiten
const PORT  = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})