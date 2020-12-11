//create the sub module.

import * as express from "express";

let transactions:any = express.Router();


transactions.get("/",(req:any,res:any):any=>{

    res.status(200).json({message:"transactions soon..."});

});

transactions.get("/rajat",(req:any,res:any)=>{
  res.status(200).json({message:"Welcome to rajat for nodejs"});
});


export default transactions;