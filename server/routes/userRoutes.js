import express from 'express'
import { registerUser, loginUser } from '../controllers/userController'

const userRouter = express.Router();
