const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const path = require('path')
    const cors = require('cors')

    app.use(cors());

app.use(express.static(path.join(__dirname, 'front_end/build')))

app.use(bodyParser.json())

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'phone'
})

connection.connect((err) => {
    if (err) console.log('error: ', error);
    console.log('connected');
})

app.get('/api/all', (req, res) => {
    connection.query('SELECT * FROM phone', (err, results, fields) => {
        res.send(results)
    })
})


app.post('/api/create', (req, res) => {
    console.log('create: ', req.body);
    connection.query('INSERT INTO phone SET ?', req.body, (error, results, fields) => {
        if (error) throw error
        console.log('Inserted post: ', results);
        res.send({response: results.insertId})
    })
})

app.get('/api/delete/:id', (req,res) => {
    console.log('id: ', req.params.id)
    connection.query('DELETE FROM phone WHERE id=?', req.params.id, (error, results, fields) => {
        if (error) throw error
        console.log('affected rows: ', results.affectedRows);
        results.affectedRows === 0 ? res.send({ response: false }) : res.send({ response: true })
    })
})

app.get('/api/update/:id', (req, res) => {
    connection.query('UPDATE phone SET ? WHERE id = ?', [req.body, req.params.id], (error, results) => {
        if (error) throw error
        results.affectedRows === 0 ? res.send({ response: false }) : res.send({ response: true })
    })
})

app.get('/api/get/:id', (req, res) => {
    connection.query('SELECT * FROM phone WHERE id = ?', req.params.id, (error, results, fields) => {
        console.log('results: ', results.length);
        results.length === 0 ? res.send({ response: false }) : res.send({ response: true, result: results[0] })
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front_end/build/index.html'))
})

app.listen(process.env.PORT || port, () => console.log('phone server running at ', port))