const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// POST request for /bfhl
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    let numbers = [];
    let alphabets = [];
    let highest_alphabet = [];
    
    // Separate numbers and alphabets
    data.forEach(item => {
        if (isNaN(item)) {
            alphabets.push(item);
        } else {
            numbers.push(item);
        }
    });
    
    // Find highest alphabet (case insensitive)
    if (alphabets.length > 0) {
        highest_alphabet = [alphabets.reduce((a, b) => a.toUpperCase() > b.toUpperCase() ? a : b)];
    }
    
    // Construct response
    const response = {
        is_success: true,
        user_id: 'Karamjot Kaur_17091999',  
        email: 'karamjotkaur771@gmail.com',         
        roll_number: '22BCC70044',        
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet,
        data: data
    };
    res.json(response);
});

// GET request for /bfhl
app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };
    res.status(200).json(response);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
