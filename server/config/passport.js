var passport = require('passport');
var User = require('../app/models/user');
var config = require('./auth');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local').Strategy;

var localOptions = {
    usernameField: 'email',
    passwordField: 'password'
};
 
var localLogin = new LocalStrategy(localOptions, function(email, password, done){
    User.findOne({"email": email}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'Login fallito. Prova di nuovo.'});
        }
        
        user.comparePasswords(password, user.hashed_password, function(err, isMatch){
            if(err){
                console.log("hey compare passwords");
                return done(err);
            }
 
            if(!isMatch){
                return done(null, false, {message: 'Errore nel login, password errata'});
            }
            return done(null, user);
        });
    });
});
 
var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: config.secret
};
 
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    User.findById(payload._id, function(err, user){
        if(err){
            return done(err, false);
        }
        if(user){
            done(null, user);
        } else {
            done(null, false);
        }
    });
});
 
passport.use(jwtLogin);
passport.use(localLogin);