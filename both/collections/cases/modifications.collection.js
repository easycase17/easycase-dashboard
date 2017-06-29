/**
 * EasyCase
 * @author Guocheng Wei <walterwei170@gmail.com>
 */

const ModificationsSchema = new SimpleSchema({
    userId: {
        type: String,
        label: 'UserID'
    },
    contractId: {
        type: String,
        label: 'ContractID'
    },
    createAt: {
        type: Date,
        label: "CreateAt",
        autoValue: function () {
            return new Date()
        }
    },
    modifications: {
        type: [{
            type: String,
            from: String,
            to: String
        }],
        label: 'Modifications'
    }
});

Modifications = new Meteor.Collection('ec_case_modifications');
Modifications.schema = ModificationsSchema;