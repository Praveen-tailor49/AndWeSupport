var http = require('http')
const express = require('express')
const cors = require("cors")
const mysql = require('mysql');

const app = express()
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST'],
}))

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'e-commerce',
});

app.post('/product', (req, res) => {

    const { ProductName, ProductPrice, ProductImage, productCategory } = req.body;
    db.query(`INSERT INTO product (ProductName, ProductImage, ProductPrice, CatId) VALUES (?,?,?,?)`,
        [ProductName, ProductImage, ProductPrice, productCategory],
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

app.post('/category', (req, res) => {

    const { cateName, cateSlug, cateImage, cateStatus } = req.body;
    db.query(`INSERT INTO category (name, categoryImg, slug, status) VALUES (?,?,?,?)`,
        [cateName, cateImage, cateSlug, cateStatus],
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
        `SELECT * FROM category`,
        (err, result) => {
            return res.json(result);
        }
    )
})



app.post('/allProduct', (req, res) => {
    db.query(
        `SELECT * FROM product`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/allUser', (req, res) => {
    const { userId } = req.body;
    db.query(
        `SELECT * FROM userdata WHERE email='${userId}'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/productList', (req, res) => {
    const { id } = req.body;
    db.query(
        `SELECT * FROM product WHERE CatId='${id}'`,
        (err, result) => {
            return res.json(result);
        }
    )
})

app.post('/userSignin', (req, res) => {

    const { name, email, password, confirmPassword, address } = req.body;
    db.query(`INSERT INTO userdata (name, email, password, confirmPassword, address) VALUES (?,?,?,?,?)`,
        [name, email, password, confirmPassword, address],
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

app.post('/cartProduct', (req, res) => {

    const { userId, productId, productName, productImage, productPrice } = req.body;
    db.query(`INSERT INTO usercart (userId, productId, productName, productImage, productPrice) VALUES (?,?,?,?,?)`,
        [userId, productId, productName, productImage, productPrice],
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

app.post('/showCart', (req, res) => {
    const { userId } = req.body;
    
    db.query(
        `SELECT * FROM usercart WHERE userId='${userId}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('id not found');
            } else if(result.length > 0) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})

app.post('/editAd', (req,res)=>{
    const {address, email} = req.body;

    db.query(
        `UPDATE userdata SET address='${address}' WHERE email='${email}'`,
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


app.post('/userOrder', (req, res) => {

    const { userId, quantity, productName, userName, totalPrice, productImage } = req.body;
    db.query(`INSERT INTO userorder (userId, quantity, productName, userName, totalPrice, productImage) VALUES (?,?,?,?,?,?)`,
        [userId, quantity, productName, userName, totalPrice, productImage],
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

app.post('/showOrder', (req, res) => {
    const { userId } = req.body;
    
    db.query(
        `SELECT * FROM userorder WHERE userId='${userId}'`,
        (err, result) => {
            if(result.length === 0) {
                res.json('order not found');
            } else if(result.length > 0) {
                res.status(200).json({message:'Successfully', data:result});
            } else {
                res.status(400).json(err);
            }
            
        }
    )
})


app.post('/showOrderAdmin', (req, res) => {
    
    db.query(
        `SELECT * FROM userorder `,
        (err, result) => {
            if(result.length === 0) {
                res.json('order not found');
            } else if(result.length > 0) {
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

app.listen(3001, () => {
    console.log('server is run on 3001');
})