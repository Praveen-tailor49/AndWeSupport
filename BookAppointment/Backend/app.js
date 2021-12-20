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



app.listen(3001, () => {
    console.log(`server is run on port`, 3001);
})