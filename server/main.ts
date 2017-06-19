import { Meteor } from 'meteor/meteor';
import './oauth.js';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.onCreateUser(function (options, user) {
    if (user.services.facebook) {
      user.username = user.services.facebook.name;
      user.emails = [{ address: user.services.facebook.email }];
      user.profile = options.profile;
      user.profile = {
        "type":     'facebook',
        "id":       user.services.facebook.id,
        "gender":   user.services.facebook.gender,
        "link":     user.services.facebook.link,
        "picture":  'graph.facebook.com/' + user.profile.fbID + '/picture'
      };
      return user;
    }
    return user;
  });
});
