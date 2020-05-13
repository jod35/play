const express= require('express');

const app =express();
const port = process.env.PORT||3000

//first route (homepage)
app.get('/',(req,res)=>{
    res.send("Homepage");
});

app.get("/about",(req,res)=>{
   res.send("About Page");
});

app.get('/hello',(req,res)=>{
    res.send("Hello "+req.query)
});

app.use((req,res)=>{
   res.status(404);
   res.send("404 Not Found");
});

app.use((req,res)=>{
   res.status(500);
   res.send("500 Internal Server Error");
});

app.listen(port,()=>{
    console.log("Server is running at http://localhost:" + port);
});