const express = require('express')     // importing module 
const app = express()  

app.get('/', (req, res) => {
    res.send("Home page it is")
})

app.get('/about', (req, res) => {
    res.send("About sec")
})

app.post('/users', (req, res) => {
    res.send("creation of user")
})

app.listen(3000, () => {
    console.log("Server is ok") 
})