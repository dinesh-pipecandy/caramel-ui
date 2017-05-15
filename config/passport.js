var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require('./auth');
var User = require('./user');
module.exports = function(passport) {
var user = new User({});
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        done(null,user);
    });

    passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {
      console.log(profile);
        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {
            /*
            token
            profile.id
            profile.displayName
            profile.emails[0].value
            profile.photos[0].value
            */
            // try to find the user based on their google id
            user.token = token;
            user.id = profile.id;
            user.name = profile.displayName;
            user.email = profile.emails[0].value;
            user.photo = profile.photos[0].value;
            user.domain = profile._json.domain;
            user.firstname = profile.name.givenName;
            user.lastname = profile.name.familyName;
            return done(null,user);

        });

    }));
};
