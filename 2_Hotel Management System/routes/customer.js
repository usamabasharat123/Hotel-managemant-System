var express = require('express');
var router = express.Router();

const dbcon=require("../config/config");

router.post('/add',(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const address=req.body.address;
    const city=req.body.city;
    const country=req.body.country;
    var form_data = {
        name: name,
        phone: phone,
        address: address,
        city: city,
        country: country,
    }
    console.log(req.body);

    dbcon.query('INSERT INTO customer SET ?',form_data,(err,result)=>{
        if(err) {console.log(err);
            return res.status(400).json({ success : false,error:err});
        }
        else{
            res.status(200).json({
                success:true,
                message :"Customer created sucessfully",
                user : result
            });
        }
            
       
    })
})



router.get('/get/:id',(req,res)=>{
    
    const id=req.params.id;
    dbcon.query('SELECT * FROM customer WHERE id='+id,(err,result)=>{
        if(err) {console.log(err);
            return res.status(400).json({ success : false,error:err});
        }
        else{
            res.status(200).json({
                success:true,
                user : result[0]
            });
            console.log(result)
        }
            
       
    })
})


router.get('/getAll',(req,res)=>{
    
    dbcon.query('SELECT * FROM customer ',(err,result)=>{
        if(err) {console.log(err);
            return res.status(400).json({ success : false,error:err});
        }
        else{
            res.status(200).json({
                success:true,
                user : result
            });
            console.log(result)
        }
            
       
    })
})


router.put('/edit/:id',(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const address=req.body.address;
    const city=req.body.city;
    const country=req.body.country;
    const id=req.params.id;
    var form_data = {
        name: name,
        phone: phone,
        address: address,
        city: city,
        country: country,
    }
    console.log(req.body);

    dbcon.query('UPDATE customer SET ? where id='+id,form_data,(err,result)=>{
        if(err) {console.log(err);
            return res.status(400).json({ success : false,error:err});
        }
        else{
            res.status(200).json({
                success:true,
                message :"Customer updated sucessfully",
                user : result
            });
        }
    })
})


router.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    dbcon.query("DELETE FROM customer where id="+id,(err,result)=>{
        if(err) {console.log(err);
            return res.status(400).json({ success : false,error:err});
        }
        else{
            res.status(200).json({
                success:true,
                message :"Customer deleted sucessfully",
                user : result
            });
        }
    })
})

module.exports = router;