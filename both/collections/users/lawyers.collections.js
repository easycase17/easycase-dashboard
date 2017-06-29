/**
 * EasyCase
 * @author Guocheng Wei <walterwei170@gmail.com>
 */

const LawyersSchema = new SimpleSchema({
    userId: {
        type: String,
        label: 'UserID',
        autoValue: function() {
            return this.userId
        }
    },
    name: {
        type: String,
        label: "Name",
        max: 50
    },
    createAt: {
        type: Date,
        label: "CreateAt",
        autoValue: function() {
            return new Date()
        }
    },
    areas: {
        type: [String],
        label: "Areas"
    },
    lastLog: {
        type: Date,
        label: "Last Log",
    },
    evaluation: {
        type: Number,
        label: "Evaluation"
    }
});

Lawyers = new Meteor.Collection('ec_lawyers');
Lawyers.schema = LawyersSchema;