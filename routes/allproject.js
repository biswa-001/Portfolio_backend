const express=require("express");
const router = express.Router();
const {Allprojects,Viewproject}=require("../controlers/allprojects.js");
const Contarct=require("../controlers/contract.js");

router.route('/allproject').get(Allprojects);
router.route('/contract').post(Contarct);
router.route('/project/view/:id').get(Viewproject);


module.exports =router;