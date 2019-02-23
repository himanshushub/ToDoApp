const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const addTodo = require('./routes/addToDo');
const deleteToDo = require('./routes/deleteToDo');


mongoose.connect(keys.mongoURI);


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

addTodo(app);
authRoutes(app);
deleteToDo(app);


if(process.env.NODE_ENV === 'production'){
    //Express will serve up the productionn assets
    //like our main.js file or main.css file
    app.use(express.static('client/build'));


    //Express will serve up the index.html file
    //if it does not recognize the route
    const path = require('path');
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.get('/', (req, res) => {
    res.send({hi: "there"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);





// Heroku 
// https://intense-thicket-29425.herokuapp.com/ | https://git.heroku.com/intense-thicket-29425.git