
import * as express from "express";

import transactions from "./transactions";
import accounts from "./accounts";


//how to use 


let app:any = express();
app.use("/module1",transactions);
app.use("/module2",accounts);

app.listen(8080,()=>{
   console.log("sever started");
});     

// ********How to execute modules.
//http://localhost:8080/module1----> got to transaction
//http://localhost:8080/module1/rajat----> got to transaction.
//http://localhost:8080/module2/--------->accounts. GET
////http://localhost:8080/module2--------> Post.

