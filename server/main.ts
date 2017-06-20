import { Meteor } from 'meteor/meteor';
import './config/oauth.js';
// import '../imports/api/server/user.js';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.onCreateUser(function (options, user) {
    if (user.services.facebook) {
      user.username = user.services.facebook.name;
      user.emails = [
        { 
          address: user.services.facebook.email,
          verified: true
        }
      ];
      user.profile = options.profile;
      user.profile = {
        "type":       'facebook',
        "id":         user.services.facebook.id,
        "first_name": user.services.facebook.first_name,
        "last_name":  user.services.facebook.last_name,
        "gender":     user.services.facebook.gender,
        "link":       user.services.facebook.link,
        "picture":    'graph.facebook.com/' + user.services.facebook.id + '/picture'
      };
      return user;
    }
    return user;
  });

});
