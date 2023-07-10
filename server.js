const express=require('express');
const emprouts=require('./nodes/emps');
var app=express();


app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*");
    next();
});
app.use(express.json());

app.use("/books",emprouts);

app.listen(1234,()=>{
    console.log("server is listening at port no 1234");
})


//create table movie(movieid int(4) auto_increment primary key,moviename varchar(15),director varchar(20),rating int(1) check(rating in(1,2,3,4,5)));