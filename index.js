import express from 'express';
import bodyParser from 'body-parser';
import Route from './routes/route.js'
import cors from 'cors';

const app=express();

//middlewares

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/',Route);



const PORT= process.env.PORT || 8002;

app.listen(PORT,()=>console.log(`the server is listening on port ${PORT}`))