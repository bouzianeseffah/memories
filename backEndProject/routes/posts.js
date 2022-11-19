import  express  from "express";
import { getPost } from "../controllers/posts.js";


const router = express.Router();

//localhost:5000/posts
router.get('/', getPost)

export default router