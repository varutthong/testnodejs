const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next)  => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
    })

// create routes
// app.post("/create", (req, res) => {
//     try{
//         
//     } catch(err){
//         console.log(err);
//         return res.status(500).send();
//     }
// })

// READ
const results = [      
            {name:"rut",score:10},
            {name:"max",score:20},
            {name:"non",score:30}                  
        ];
        
const user = JSON.stringify(results)

app.get("/read", (req, res) => {
    
    try{
         res.status(200).json({player:user});
    }catch(err){
        console.log(err);
        return res.status(500).send();

    }
})

 app.get('/', (req, res) => {
     res.send('Hello world test')
    
 })



app.listen(3000, () => console.log('Server is running on port 3000')); 
