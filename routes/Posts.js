import express from "express"
import { GetPosts, Posts } from "../controller/Posts.controller.js";

const Postsrouter = express.Router();


Postsrouter.post("/",Posts)
Postsrouter.get("/",GetPosts)
export default Postsrouter