import { v4 as uuidv4 } from "uuid";

global.Posts = global.Posts || [];

export const Posts = (req, res) => {
    // find founder id or content
  const { founderId, content } = req.body;
  if (!founderId || !content?.trim()) {
    return res.status(400).json({error: "founderId and content are required"});
  }
// filter founder base on id
const founder = global.Founders.find(f => f.id === founderId);
    // if Founder already exist show error
  if (!founder) {
    return res.status(404).json({ error: "Founder not found"});
  }
// create a post founderid
  const post = {
    id: uuidv4(),
    founderId,
    content,
    createdAt: new Date()
    };
    
    global.Posts.push(post);
    
 return res.status(201).json(post);
}

export const GetPosts=(req, res) => {
    const { founderId } = req.query;
    // Filter founder base on id
  if (founderId) {
    return res.status(200).json(global.Posts.filter(p => p.founderId === founderId));
  }

 return res.status(200).json(global.Posts);
}