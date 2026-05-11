import express from "express"
import { Founders, GetFounders } from "../controller/Founder.controller.js";
const Founderrouter = express.Router();


Founderrouter.post("/",Founders)
Founderrouter.get("/",GetFounders)
export default Founderrouter