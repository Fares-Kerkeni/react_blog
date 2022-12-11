import express from "express";
import {
    getPost,
    getPostById,
    createPost,
    UpdatePost,
    DeletePost
} from "../controllers/Post.js"
const router = express.Router();
router.get('/post',getPost);
router.get('/post/:id',getPostById);
router.post('/post',createPost);
router.patch('/post/:id',UpdatePost);
router.delete('/post/:id',DeletePost);

export default router;