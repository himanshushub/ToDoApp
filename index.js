const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

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

authRoutes(app);





app.get('/', (req, res) => {
    res.send({hi: "there"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);





// Heroku 
// https://intense-thicket-29425.herokuapp.com/ | https://git.heroku.com/intense-thicket-29425.git