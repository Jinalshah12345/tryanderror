const express = require('express');
const path = require('path');

const http = require('http');

const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname) + '/views/index.html');

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, _ => {
    console.log('Server is running');
});
