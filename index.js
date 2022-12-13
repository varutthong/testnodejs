const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express();
app.use(express.json());
app.use((req, res, next)  => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
    })

//Mysql connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'leaderboard',
//     port: '3306'
 
// })

// connection.connect((err) => {
//     if(err) {
//         console.log('Error connecting to MySQL database = ', err)
//         return;
//     }
//     console.log('Mysql successfully connected!');
// })

// create routes
// app.post("/create", async (req, res) => {
//     const { name, score} =req.body;
//     try{
//         connection.query(
//             "INSERT INTO user(name, score) VALUES(?, ?)",
//             [name, score],
//             (err, results, fields) => {
//                 if(err){
//                     console.log("Error while inserting a user into the database", err);
//                     return res.status(400).send();
//                 }
//                 return res.status(201).json({ message: "New user successfully created!"});
//             }
//         )
//     } catch(err){
//         console.log(err);
//         return res.status(500).send();
//     }
// })

// READ
app.get("/read", async (req, res) => {
    const results = 
        [      
            {name:"rut",score:"10"},
            {name:"non",score:"20"},
            {name:"max",score:"30"},
            {name:"man",score:"40"},
            {name:"gae",score:"50"}         
        ]
    try{
        
        // connection.query("SELECT * FROM user", (err, results, fields) => {
        //     if(err){
        //         console.log(err);
        //         return res.status(400).send();
        //     }
        //     res.status(200).json(results)
        // })
         res.status(200).send({user:results});
    }catch(err){
        console.log(err);
        return res.status(500).send();

    }
})

 app.get('/', (req, res) => {
     res.json('Hello world test')
    
 })



app.listen(3000, () => console.log('Server is running on port 3000'));
