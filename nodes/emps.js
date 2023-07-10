const express=require('express');
const appforemp=express.Router();
const mysql=require('mysql2');
const { request } = require('http');
const { error } = require('console');
var connection =mysql.createConnection({
    host    :  "localhost",
    user    :   "root",
    password    :   "manager",
    database    :   "exam",
});



appforemp.get("/:auther", (request, response)=>{
    // response.send("EMPS GET IS CALLED");
    connection.query(`select * from Book_Tb where auther='${request.params.auther}' `, (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})



appforemp.post("/",(request,response)=>{
    var query=`insert into Book_Tb values(${request.body.id},'${request.body.b_name}','${request.body.auther}','${request.body.book_type}','${request.body.price}','${request.body.publishedDate}','${request.body.language}');`
   //var query = `insert into Employee_Tb values(${request.body.Eno},'${request.body.Ename}','${request.body.Email}','${request.body.Epassword}',${request.body.Eid},'${request.body.Edname}','${request.body.Edoj}')` ;
   connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appforemp.put("/:id",(request,response)=>{
  var query=`update Book_Tb set price=${request.body.price},language='${request.body.language}' where id=${request.params.id};`;
  //var query=`update Employee_Tb set dname='${request.body.Edname}',doj='${request.body.Edoj}' where id=${request.params.Eno}`;  
  connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

appforemp.delete("/:Edoj",(request,response)=>{
    var query=`delete from Employee_Tb where doj='${request.params.Edoj}'`
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

module.exports=appforemp;