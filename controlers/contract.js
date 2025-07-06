const contract=require("../models/contractModel.js");
const sendNotification=require("../utils/emailnotificatio.js");
const  Contarct= async(req,res)=>{
let {name,email,messages}=req.body;

try{

 

const newContract=new contract({
    name,
    email,
    messages,
})

await newContract.save();
await  sendNotification(newContract);
res.status(201).json({ message: "Contract saved successfully", data: newContract });

}catch(err){

    console.log(err);
    res.status(500).json({ message: "Something went wrong", error: err.message });
}


}

module.exports =Contarct;