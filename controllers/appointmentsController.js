const Appointments = require('../models/Appointments');


exports.getAll = async (req,res) =>{
    try{
    const appointments = await Appointments.findAll();
    res.json(appointments);

    }
    catch(err){
        console.error('Error fetching appointments',err);
        res.status(500).json({message:'Internal server error',error:err.message});
    }
};


exports.getByID = async (req,res) =>{
    try{
    const appointments = await Appointments.findByPk(req.params.id);
    res.json(appointments);

    }
    catch(err){
        console.error('Error fetching appointments',err);
        res.status(500).json({message:'Internal server error',error:err.message});
    }
};

exports.insert = async(req,res)=>{
    try{
        const newApt = await Appointments.create(req.body);
        res.status(201).json(newApt);

    }
    catch(err){
        console.log("Error inserting appointmtnts",err);
        res.status(400).json({message:'Error inserting data',error:err.message});
    }
};

exports.del = async(req,res)=>{
    try{
        await Appointments.destroy({where:{id:req.params.id}});
        res.status(204).send();
    }
    catch(err){
        console.log("Cannot delete this appointment",err);

    }
};

exports.update = async (req,res)=>{
    try{
        const updatedApt = await Appointments.update(req.body,{where:{id:req.params.id}});
        res.json(updatedApt);
    }
    catch(err){
        console.log("Cannot update appoinemtnt for this id",err);
    }
}

 