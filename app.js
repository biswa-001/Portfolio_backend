if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
  }
const express=require("express");
const cors=require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app=express();
const projectRoute=require("./routes/allproject.js");

app.set("port",process.env.PORT || 2000);

 const alloworigin=[
   "https://portfolio-biswajit-ghosh.vercel.app",
   "http://localhost:3000"
]
const corsOptions = {
   origin:function (origin, callback) {
    if (!origin || alloworigin.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/", projectRoute); 
app.get("/",(req,res)=>{
res.send("hello i am running");
});

const start= async()=>{
 const dbconnection= await mongoose.connect(process.env.DB_URL);
 console.log("conntecion succesfull");
    app.listen(2000,()=>{
        console.log("the app is listing on 2000");
    });
    
}

start();