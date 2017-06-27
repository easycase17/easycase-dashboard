import './imports/startup/service-config.js';
import './imports/api/users/index.js';

Meteor.startup(() => {

    /**
     * Set up account services
     */
    var facebookConfig = Meteor.settings.private.oauth.facebook;
    var googleConfig = Meteor.settings.private.oauth.google;

    console.log('---------- Account Service Configuration ----------');
    if (facebookConfig) {
        console.log('Got settings for facebook', facebookConfig)
        configureFacebook(facebookConfig);
    }

    if (googleConfig) {
        console.log('Got settings for google', googleConfig)
        configureGoogle(googleConfig);
    }

    console.log("---------- Server Up ----------");
})
