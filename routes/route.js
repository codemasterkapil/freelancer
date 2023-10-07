import express from 'express';
import {getDashboard,getLessons,quizInit,quizResponse} from '../controller/user.js';

const route=express.Router();

route.get('/dashboard',getDashboard);
route.get('/lessons',getLessons);

route.get('/quizres',quizResponse);
route.get('/quizinit',quizInit);


export default route;