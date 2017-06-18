import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/users'
import '../imports/startup/server/oauth.js';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
      return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{ address: user.services.facebook.email }];
    return user;
  });
});
