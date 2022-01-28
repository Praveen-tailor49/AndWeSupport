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


app.post('/SignUp', (req, res) => {

    const { userName, userEmail, userPassward, userToken } = req.body;
    db.query(`INSERT INTO userdata (userName, userEmail, userPassward, userToken) VALUES (?,?,?,?)`,
        [userName, userEmail, userPassward, userToken],
        (err, result) => {
            if (err) {
                res.status(400).json('Already Register');
            }
            else {
                res.status(200).json('Successfully');
            }
        }
    )
})


app.post('/events', (req, res) => {

    const { eventName, eventType, location, description, duration, userToken } = req.body;
    db.query(`INSERT INTO eventbooking (eventName, eventType, location, description, duration, userToken) VALUES (?,?,?,?,?,?)`,
        [eventName, eventType, location, description, duration, userToken],
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
    const {token} = req.body
    db.query(
        `SELECT * FROM eventbooking WHERE userToken = '${token}'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/userData', (req, res) => {

    const {token} = req.body
    if(!token){
        db.query(
            `SELECT * FROM userdata `,
            (err, result) => {
                return res.json(result);
            }
        )
    } else {
        db.query(
            `SELECT * FROM userdata WHERE userToken = '${token}'`,
            (err, result) => {
                return res.json(result);
            }
        )
    }
})



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server is runing port ${PORT}`);
})
