const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const Usermodel = mongoose.model('users');

passport.serializeUser((user, done)=> {
    done(null, user.id);
});

passport.deserializeUser((id, done)=> {
    Usermodel.findById(id).then((user)=>{
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
        }, 
        (accessToken, refreshTOken, profile, done)=> {
            Usermodel.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if(existingUser){
                        done(null, existingUser);
                    }
                    else{
                        new Usermodel({ 
                            name: profile.displayName,
                            googleId: profile.id,
                            email: profile.emails[0].value
                        }).save().then((newUser)=>{
                            done(null, newUser);
                        })
                    }
            });
            
        }
    )
);