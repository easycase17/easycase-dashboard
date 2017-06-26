// Setting up facebook oauth service
configureFacebook = function(config) {
    // first, remove configuration entry in case service is already configured
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });

   ServiceConfiguration.configurations.insert({
        service: "facebook",
        loginStyle: "popup",
        appId: config.clientId,
        secret: config.secret,
        requestPermissions: [
            'public_profile', 
            'email',
            'user_friends', 
            'user_photos',
            'user_education_history'
        ]
    });
};


// Setting up google oauth service
configureGoogle = function(config) {
    // first, remove configuration entry in case service is already configured
    ServiceConfiguration.configurations.remove({
        service: "google"
    });

   ServiceConfiguration.configurations.insert({
        service: "google",
        loginStyle: "popup",
        clientID: config.clientId,
        secret: config.secret,
        requestPermissions: [
        ]
    });
};

var facebookConfig = Meteor.settings.private.oauth.facebook;
var googleConfig = Meteor.settings.private.oauth.google;

if(facebookConfig) {
    console.log('Got settings for facebook', facebookConfig)
    configureFacebook(facebookConfig);
}

if(googleConfig) {
    console.log('Got settings for google', googleConfig)
    configureGoogle(googleConfig);
}