const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controllers = require("../controllers/contactController");

//test routing
router.get("/hello",(req,res)=>{
    res.send("hello routing")
})

//post contact 
router.post("/name",controllers.postContact);

//method get
//get all contacts
//@path : "http://localhost:5000/api/contact/"
router.get("/",async(req,res)=>{
    try {
        const result = await Contact.find();
        res.status(200).send({result:result,msg:"geting contacts successfully"})
    } catch (error) {
        res.status(400).send({msg:"can not get contacts"})
    }
})

//method get
//get One contact
//@path : "http://localhost:5000/api/contact/:id",
//params id

router.get("/:id",async(req,res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id});
        res.status(200).send({result:result,msg:"geting contact by id successfully"})
    } catch (error) {
        res.status(400).send({msg:"can not get contacts"})
    }
})

//method Delete
//delete One contact
//@path : "http://localhost:5000/api/contact/:id",
//params id

router.delete('/:id',async(req,res)=>{
    try {
        const result = await Contact.deleteOne({_id:req.params.id});
         result ? res.status(200).send({message:"Contact deleted ..."})
        : res.status(400).send({message:"there is no contact with this id..."})
           
    } catch (error) {
        res.status(500).send({msg:"can not delete contact"})
    }
})

router.put("/:id",async(req,res)=>{
    try {
       const result  = await Contact.updateOne({_id:req.params.id},{$set:{...req.body}})
       result.nModified
       ? res.send({message:"user updated..."})
       : res.send({msg:"contact already updated"});
    } catch (error) {
        res.send({msg:"there is no user with this id"})
    }
})

module.exports = router;