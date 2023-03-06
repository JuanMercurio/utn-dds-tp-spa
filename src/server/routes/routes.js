import express from 'express'
import * as memberController from '../controllers/memberController.js'
export const router = express.Router();

router.get('/members', memberController.all);


