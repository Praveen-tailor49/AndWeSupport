var http = require('http')
const express =  require ('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'game_data',
});

app.post('/signUp', (req, res) => {

    const {userName, userMobile, userNickName, userPassword, userReCode, userBalance, } = req.body
})





app.listen('3001', () => console.log('server is run on 3001'))