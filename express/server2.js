const express = require('express'); 
const app = express(); 
const studentRoutes = require('../Routes/studentRoutes'); 

app.use(express.json()); 
app.use('/students', studentRoutes); 

app.listen(3000, () => { 
    console.log('server okkk'); 
});
