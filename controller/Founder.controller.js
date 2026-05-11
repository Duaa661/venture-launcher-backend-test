import { v4 as uuidv4 } from "uuid";

// if already exits founder not create another array return exist founder
// if we not exits so create a new array
global.Founders = global.Founders || [];

export const Founders = (req, res) => {
    // access name email role or sector in body
    const { name, email, role, sectors = [] } = req.body;
    // if name email role not exist return error 400
    if (!name || !email || !role) {
        return res.status(400).json({error:"name email and role are required"})
    }
    // and if founder or investor not exist so return error;
    if (!["founder", "investor"].includes(role)) {
    return res.status(400).json({ error: "role must be founder or investor"});
  }
    // if sector in not a array return error;
    if (!Array.isArray(sectors)) {
        return res.status(400).json({error: "sectors must be an array"});
    }
    // All is good create founder
    const founder = {
        id: uuidv4(),
        name,
        email,
        role,
        sectors,
        createdAt:new Date()
    }
   //  push in array
        global.Founders.push(founder);
     return res.status(201).json(founder);
}

// Get Founder
export const GetFounders = (req, res) => {
 return res.status(200).json(global.Founders);
}