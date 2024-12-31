const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Authrouter = require('./Routes/Auth');

// Load environment variables from .env file


const app = express();

// Middleware setup
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

// Routes setup
app.use('/', Authrouter);

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/CrudAuth')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Start the server
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
