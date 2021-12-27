const http = require('http')
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'booking',
})

app.post('/add-category', (req, res) => {

    const {categoryName} = req.body
    db.query(
        `INSERT INTO categoryService (categoryName) VALUES (?)`,
        [categoryName],
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


app.post('/add-service', (req, res) => {

    const {serviceName, categoryId, servicesPrice} = req.body
    db.query(
        `INSERT INTO services (serviceName, categoryId, servicesPrice) VALUES (?,?,?)`,
        [serviceName, categoryId, servicesPrice],
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


app.post('/add-extra-service', (req, res) => {

    const {serviceName, serviceId, servicesPrice} = req.body
    db.query(
        `INSERT INTO extraServices (serviceName, serviceId, servicesPrice) VALUES (?,?,?)`,
        [serviceName, serviceId, servicesPrice],
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

app.post('/addServiceDuration', (req, res) => {

    const {duration, durationPrice, time} = req.body
    db.query(
        `INSERT INTO servicesduration (duration, durationPrice, time) VALUES (?,?,?)`,
        [duration, durationPrice, time],
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

app.post('/slots', (req, res) => {

    const {date, slote, time} = req.body
    db.query(
        `INSERT INTO slots (date, slote, time) VALUES (?,?,?)`,
        [date, slote, time],
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

app.post('/bookSlots', (req, res) => {

    const {date, time, userName, phone, email, service, extraService, btnId} = req.body
    db.query(
        `INSERT INTO bookslot (date, time, userName, phone, email, service, extraService, btnId) VALUES (?,?,?,?,?,?,?,?)`,
        [date, time, userName, phone, email, service, extraService, btnId],
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

app.post('/userSignin', (req, res) => {

    const { name, email, password } = req.body;
    db.query(`INSERT INTO userdata (name, email, password) VALUES (?,?,?)`,
        [name, email, password],
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

app.post('/userLogin', (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    db.query(
        `SELECT * FROM userdata WHERE email='${email}' AND password='${password}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('Email and Password is wrong');
            } else if(result.length === 1) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/adminLogin', (req, res) => {
    const { email, password } = req.body;

    if(email === '' || password === ''){
        res.send('empty felid ')
    } else if(email === 'admin123@gmail.com' && password === 'admin123'){
        res.send('Successfully')
    } else (
        res.send('user not found')
    )
})


app.post('/showCategory', (req, res) => {
    db.query(
        `SELECT * FROM categoryService`,
        (err, result) => {
            return res.json(result);
        }
    )
})


app.post('/showService', (req, res) => {
    const {id} = req.body
    if(id){
        db.query(
            `SELECT * FROM services WHERE categoryId = ${id}`,
            (err, result) => {
                if(result.length>0){
                    return res.json(result);
                } else {
                    res.status(400).json(err);
                }
            }
        )
    } else {
        db.query(
            `SELECT * FROM services `,
            (err, result) => {
                if(result.length>0){
                    return res.json(result);
                } else {
                    res.status(400).json(err);
                }
            }
        )
    }
})


app.post('/showExtraService', (req, res) => {
    const {id} = req.body
    db.query(
        `SELECT * FROM extraServices  WHERE serviceId = ${id}`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/showDuration', (req, res) => {
    // const {id} = req.body
    db.query(
        `SELECT * FROM servicesduration`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/showSlot', (req, res) => {
    
    db.query(
        `SELECT * FROM slots`,
        (err, result) => {
            return res.json(result);
        }
    )
})

// app.post('/showSlotBooking', (req, res) => {
//     const {date} = req.body
//     db.query(
//         `SELECT * FROM bookslot WHERE date = "${date}"`,
//         (err, result) => {
//             if(err){
//                 return res.send(err)
//             }
//             return res.json(result);
//         }
//     )
// })

app.post('/showSlotBooking', (req, res) => {
    const {date} = req.body
    db.query(
        `SELECT * FROM bookslot `,
        (err, result) => {
            if(err){
                return res.send(err)
            }
            return res.json(result);
        }
    )
})




app.listen(3001, () => {
    console.log(`server is run on port`, 3001);
})