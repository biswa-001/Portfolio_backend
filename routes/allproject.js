const express=require("express");
const router = express.Router();
const {Allprojects}=require("../controlers/allprojects.js");
const Contarct=require("../controlers/contract.js");

router.route('/allproject').get(Allprojects);
router.route('/contract').post(Contarct);


module.exports =router;