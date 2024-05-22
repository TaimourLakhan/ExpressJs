const express=require("express");

const app=express();
// console.dir(app);
const port=3000;

app.listen(port,()=>{
    console.log(`app is listening the port :${port}`);
})

// the above portion is listening the request by server 

// now request sending method to server like that 

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request recived");
//     // res.send(tim={
//     //     location:"samundri",
//     //     age:24,
//     //     nam:"taimour lakhan"
//     // });
//     res.status(500).send({ error: 'something blew up' })
// })


// now Routing is process of selecting path for traffic in a network
// in every route there will be single response it will be string object or html page so we use app.get or something else use app listen every request 

// middleware is the when request id recived then middleware is to target the request before go to reponse 

// app.use(express.static("public"));

// app.get("/",(req,res)=>{
//     res.send("you send the response at root ");
// })
// app.get("/apple",(req,res)=>{
//     res.send("you send the response buddy in form of apple");
// })
// app.get("/mango",(req,res)=>{
//     res.send("you send the response buddy in form of mango");
// })

// for standard path if user enter the wrong path then use standdard path 

// app.get("*",(req,res)=>{
//     res.send("this path doesnot exist");
// })

// app.post("/taimour",(req,res)=>{
//     res.send("hey web developer am full stack mern developer taimour lakhan");
// })

// Nodemon is authomatically restart the server when the  code changes 

// npm install nodemon done 

// path parameters is like for every path after original domain is just like variable if anyone user connect with that variable store its value and make seprate path for it 

app.get("/",(req,res)=>{
    res.send("hey am root");
})

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let{username,id}=req.params;
    
    // res.send(`hey this is response with  username @${username} and its id is ${id} `);
    res.send(`<h1>hey this is response with  username @${username} and its id is ${id} </h1>`);
})


// now Query strings in expressjs is like that when we serach and pass some query it store on req parameter we can acess it like that 

app.get("/search",(req,res)=>{
    let{q}=req.query;
    if(!q){
        res.send("nothing query here");
    }
    res.send(`<h1> you search for ${q}</h1>`);
})





