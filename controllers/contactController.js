const Contact =require('../models/Contact');


exports.postContact =async(req,res)=>{
    try {
        //create a new contact with model contact
        const newContact = new Contact(req.body);
        //test if user has an email
        if(!req.body.email){
            res.status(400).send({msg:"email is required check again"});
            return
        }
        //test nub 2 : if email already exist :=> email should be unique
        const user = await Contact.findOne({email:req.body.email})
        if(user){
            res.status(400).send({msg:"user already exist"});
            return;
        }
        //save the contact
        const response = await newContact.save();
        res.status(200).send({msg:"user is saved",response:response})
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:'can not save it...'})
    }
}