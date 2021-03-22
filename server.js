const express = require('express')
const htmlroutes = require('./routes/htmlroutes') 
const apiroutes = require('./routes/apiroutes');
const app = express()

const PORT = process.env.PORT || 8080

// app.use( express.static('public') )
// app.use('/', htmlroutes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiroutes);
app.use('/', htmlroutes);
app.listen(PORT, function() {
    console.log( `Serving app on: https://localhost:${PORT}` )
})
