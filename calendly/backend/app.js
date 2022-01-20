var http = require('http')
const express =  require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'events',
});



app.post('/events', (req, res) => {

    const { eventName, eventType, location, description, duration } = req.body;
    db.query(`INSERT INTO eventbooking (eventName, eventType, location, description, duration) VALUES (?,?,?,?,?)`,
        [eventName, eventType, location, description, duration],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json('Successfully');
            }
        }   
    )
})

app.post('/allEvents', (req, res) => {
    db.query(
        `SELECT * FROM eventbooking`,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server is runing port ${PORT}`);
})