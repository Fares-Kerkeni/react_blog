import express from "express";
import {
    getUser,
    getUserById,
    createUser,
    UpdateUser,
    deleteUser
} from "../controllers/User.js"
const router = express.Router();
router.get('/user',getUser);
router.get('/user/:id',getUserById);
router.post('/user',createUser);
router.patch('/user/:id',UpdateUser);
router.delete('/user/:id',deleteUser);

export default router;