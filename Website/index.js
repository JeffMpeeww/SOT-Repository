const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'yourdatabasename',
  port: 3306,
  connectTimeout: 30000
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Fetch all the payments on the system
app.get('/payments', (req, res) => {
    const sql = 'SELECT * FROM Payments';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Fetch a single payment by email
app.get('/payment/:email', (req, res) => {
    const email = req.params.email;
    const sql = 'SELECT * FROM Payments WHERE Email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    });
});

// Update a payment record
app.post('/payment/update', (req, res) => {
    const { Email, Amount, StartDate, EndDate } = req.body;
    const sql = 'UPDATE Payments SET Amount = ?, StartDate = ?, EndDate = ? WHERE Email = ?';
    db.query(sql, [Amount, StartDate, EndDate, Email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Payment updated successfully' });
    });
});

// Create a new payment record
app.post('/payment/create', (req, res) => {
    const { Email, Amount, StartDate, EndDate } = req.body;
    const sql = 'INSERT INTO Payments (Email, Amount, StartDate, EndDate) VALUES (?, ?, ?, ?)';
    db.query(sql, [Email, Amount, StartDate, EndDate], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Payment created successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
