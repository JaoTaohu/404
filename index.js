const express = require('express')
const app = express()

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(3000, () => {
    console.log("start server port 3000")
})