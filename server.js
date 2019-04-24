const express = require('express');

var app = express();
const port = 3000;
//HTTP route handlers
//http get request
app.get('/', (req, res) => {   //req - request   res- response
   res.send('Hello Everyone..!!! Using Express');
});

//listening the app in port no - 3000
app.listen(port, () => {
    console.log(`App listening on port number :- ${port}...!!!`);
});
