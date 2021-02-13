const express = require('express')
const app = express ()
const port = 3002

app.get('/',(req,res) => {
    res. send ('Hello World Reloaded')
})

//comments //to other programmers
app.listen(port,() => {
    console.log('My server runs on local host http://local host:3002')
})
