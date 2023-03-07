const express = require('express')
const donationRoutes = require('./src/donations/routes');
const app = express();
const port = 4000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("hello world!");
})

app.use('/api/v1/donations', donationRoutes);

app.listen(port,() => console.log(`app listening on port ${port}`))

