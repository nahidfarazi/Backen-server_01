require('dotenv').config('../.env');
const express = require('express'); 
const cors = require('cors');
const morgan = require('morgan');


const app = express();

//middlerware Use
app.use([morgan('dev'),cors(),express.json()])




app.get('/health',(req,res,next)=>{
    res.status(200).json({message:'success'})
    
});




module.exports = app