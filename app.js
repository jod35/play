const express= require('express');

const app =express();
const port = process.env.PORT||3000


app.use(express.urlencoded());


//first route (homepage)
app.get('/',(req,res)=>{
    console.log(req.headers);
    res.redirect('/about',200);
});


app.get("/about",(req,res)=>{
   res.send("About Page");
});


app.get('/capital/:name',(req,res)=>{
  res.send(req.params.name.toUpperCase());
});

app.get('/hello',(req,res)=>{
    for(const key in req.query){
        console.log(req.query[key]);
    }
});

app.post('/form',(req,res)=>{

});


app.use((req,res)=>{
 res.sendStatus(404);
});

app.use((req,res)=>{
  res.sendStatus(500);
});

app.listen(port,()=>{
    console.log("Server is running at http://localhost:" + port);
});