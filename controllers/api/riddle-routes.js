const router=require('express').Router();
const { Riddles }= require('../../models');

router.get('/', async(req,res)=>{
    try{
        const dbRiddleData= await Riddles.findAll({
            include:[
                {
                    model: Riddles,
                    atrributes:['riddle', 'answer']
                }
            ]
        });
        res.render('home', {
            
        })
    }
})