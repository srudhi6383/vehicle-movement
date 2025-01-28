const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const vehicleData = [
    { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
    { "latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z" },
    { "latitude": 17.385046, "longitude": 78.486673, "timestamp": "2024-07-20T10:00:10Z" },
    { "latitude": 17.385047, "longitude": 78.486674, "timestamp": "2024-07-20T10:00:15Z" }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/vehicle-location', (req, res) => {
    res.json(vehicleData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});