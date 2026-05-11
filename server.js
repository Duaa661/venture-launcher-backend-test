import express from "express";
import dotenv from "dotenv";
import Postsrouter from "./routes/Posts.js";
import Founderrouter from "./routes/Founders.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/founders", Founderrouter);
app.use("/posts", Postsrouter);

app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.use((req, res) => {
    return res.status(404).json({
        error: "Route Not Found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});