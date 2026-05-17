const express = require('express');

const app = express();
app.use('/',(req,res)=>{
    res.json("server running on conatiner");

})

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
})