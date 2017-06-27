import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    createNewUser(options) {
        var userId = Accounts.createUser(options);
        Accounts.addEmail(userId, 'test@email.com', false);
        Accounts.sendVerificationEmail(userId, 'test@email.com');

    }
});
