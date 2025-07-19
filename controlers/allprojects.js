const Project=require("../models/projectsModel.js");

const Allprojects = async (req, res) => {
  try {
    const projectdata = await Project.find({});
   // console.log(projectdata);
    res.json(projectdata); 
  } catch (error) {
    console.error(" Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const Viewproject=async(req,res)=>
{
const {id}=req.params;
try{
const getsingleProject=await Project.findById(id);
res.json(getsingleProject)
}catch{
  console.error(" Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
}



}

module.exports = { Allprojects ,Viewproject}; 
