
 const Project=require("../models/projectsModel.js");

const mongoose = require('mongoose');

 const initdata = require("./data.js");

 async function main() {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("MongoDB connection successful");
  
      // Filter out any invalid project entries (e.g. missing title)
      const cleanData = initdata.data.filter(project => project && project.title);
  
      console.log("Cleaned data to insert:", cleanData);
  
  
      
      await Project.insertMany(cleanData);
      console.log(" Data inserted successfully");
  
    
    } catch (err) {
      console.error(" Error inserting data:", err);
    }
  }
  

main();
