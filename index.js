const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input'
        });
    }

    const alphabets = [];
    const numbers = [];
    let highestLowerCase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            if (item === item.toLowerCase()) {
                if (item > highestLowerCase) highestLowerCase = item;
            }
            alphabets.push(item);
        }
    });

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john.doe@college.com",
        roll_number: "123456",
        numbers,
        alphabets,
        highestLowerCase
    });
});


app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
