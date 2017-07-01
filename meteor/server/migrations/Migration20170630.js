/**
 * Guocheng Wei <walterwei170@gmail.com>
 * 
 * Easycase
 */

Migrations.add({
    version: 1,
    up: function() {
        // Dummy data for users
        let user_data = {
            username: 'guocheng',
            email: 'wei170@purdue.edu',
            password: '123456a',
            profile: {
                firstname: 'Guocheng',
                lastname: 'Wei',
                roles: [
                    'lawyer'
                ]
            }
        }
        const userId = Accounts.createUser(user_data);

        // Dummy data for ec_lawyers
        let lawyer_data = {
            userId: userId,
            name: 'Guocheng Wei',
            areas: [
                'Administrative Law'
            ],
            evaluation: 0            
        };
        const lawyerId = Lawyers.insert(lawyer_data);

        // Dummy data for ec_cases
        let case_data = {
            title: 'The first Easycase law case',
            tags: [
                'test',
                'guocheng'
            ],
            content: 'This is the first law case has even been on Easycase',
            payment: 1,
            languages: [
                'EN', 'CH'
            ]
        }
        const caseId = Cases.insert(case_data);

        // Dummy data for ec_case_contracts
        let contract_data = {
            createrId: userId,
            lawyersId: [
                lawyerId
            ],
            caseId: caseId
        }
        const contractId = Contracts.insert(contract_data);

        // Dummy data for ec_case_modification
        let mod_data = {
            userId: userId,
            contractId: contractId,
            modifications: [
                { type: 'Test', from: 'Hello World!', to: 'Hello EasyCase!' }
            ]
        }
        Modifications.insert(mod_data);

    },
    down: function () {

    }
});