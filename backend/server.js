const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const planets = require("./data/data.json");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(
    { origin: ["https://planet-fact-site-1.onrender.com"],
        methods: ["GET"], }
    
));
app.use(express.json());

// Routes
app.get('/api/planets', (req, res) => {
    res.json(planets);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
