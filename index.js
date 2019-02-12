const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: "there"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);





// Heroku 
// https://intense-thicket-29425.herokuapp.com/ | https://git.heroku.com/intense-thicket-29425.git