/**
 * EasyCase
 * @author Guocheng Wei <walterwei170@gmail.com>
 */
const CasesSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title',
        max: 255
    },
    tags: {
        type: [String],
        label: 'Tags'
    },
    content: {
        type: String,
        label: 'Content'
    },
    payment: {
        type: Number,
        label: 'Payment'
    },
    createAt: {
        type: Date,
        label: "CreateAt",
        autoValue: function () {
            return new Date()
        }
    },
    languages: {
        type: [String],
        label: 'Languages'
    }
});

Cases = new Meteor.Collection('ec_cases');
Cases.schema = CasesSchema;