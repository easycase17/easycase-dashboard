import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    createNewUser(options) {
        var userId = Accounts.createUser(options);
        Accounts.addEmail(userId, options.profile.emails[0], false);
        Accounts.sendVerificationEmail(userId, options.profile.emails[0]);
    }
});
