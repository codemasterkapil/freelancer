
import {quizres} from '../Data/quizRes.js';
import {quizinit} from '../Data/Quiz-init.js';
import {lesson} from '../Data/lessons.js';
import {dashboard} from '../Data/Dashboard.js';

export const getDashboard=(req,res)=>{
    return res.status(200).json(dashboard); 
}

export const getLessons=(req,res)=>{
    return res.status(200).json(lesson); 
}

export const quizInit=(req,res)=>{
    return res.status(200).json(quizinit); 
}

export const quizResponse=(req,res)=>{
    return res.status(200).json(quizres); 
}