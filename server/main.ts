import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/users'
import '../imports/startup/server/oauth.js';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.onCreateUser(function (options, user) {

    if (user.services.facebook) {
      user.username = user.services.facebook.name;
      user.emails = user.services.facebook.email;
      user.facebookLink = user.services.facebook.link;
      user.gender = user.services.facebook.gender;
      return user;
    }
    return user;
  });
});
