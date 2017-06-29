/**
 * EasyCase
 * @author Guocheng Wei <walterwei170@gmail.com>
 */

const ContractsSchema = new SimpleSchema({
    createrId: {
        type: String,
        label: 'CreaterID'
    },
    layerId: {
        type: [String],
        label: 'LayerID'
    },
    caseId: {
        type: String,
        label: 'CasesID'
    },
    createAt: {
        type: Date,
        label: "CreateAt",
        autoValue: function () {
            return new Date()
        }
    }
});

Contracts = new Meteor.Collection('ec_case_contracts');
Contracts.schema = ContractsSchema;