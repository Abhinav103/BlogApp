import express from "express"
import { CreatePost, DeletePost, GetAllPosts, GetAPost } from "../controllers/post.controller.js";
const PostRouter = express.Router();

PostRouter.get("/",GetAllPosts);
PostRouter.get("/:PostId",GetAPost);
PostRouter.post("/",CreatePost);
PostRouter.delete("/:PostId", DeletePost)



export default PostRouter;
