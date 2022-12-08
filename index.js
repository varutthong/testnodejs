const express = require('express')
const mysql = require('mysql');

const app = express();
app.use(express.json());

// Mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'leaderboard',
    port: '3306'
 
})

connection.connect((err) => {
    if(err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('Mysql successfully connected!');
})

// create routes
app.post("/create", async (req, res) => {
    const { name, score} =req.body;
    try{
        connection.query(
            "INSERT INTO user(name, score) VALUES(?, ?)",
            [name, score],
            (err, results, fields) => {
                if(err){
                    console.log("Error while inserting a user into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New user successfully created!"});
            }
        )
    } catch(err){
        console.log(err);
        return res.status(500).send();
    }
})

// READ
app.get("/read", async (req, res) => {
    const results = {"name":"rut"}
    try{
        // connection.query("SELECT * FROM user", (err, results, fields) => {
        //     if(err){
        //         console.log(err);
        //         return res.status(400).send();
        //     }
        //     res.status(200).json(results)
        // })
        res.status(200).json(results)
    }catch(err){
        console.log(err);
        return res.status(500).send();

    }
})

app.get('/', (req, res) => {
    return res.send('111111111111111111111111')
    
})



app.listen(3000, () => console.log('Server is running on port 3000'));
module.exports = app