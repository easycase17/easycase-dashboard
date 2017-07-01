/**
 * Guocheng Wei <walterwei170@gmail.com>
 * 
 * Easycase
 */

Migrations.add({
    version: 1,
    up: function() {
        let data = {
            userId: 'SafB9cHgzQZyshhqA',
            name: 'Guocheng Wei',
            areas: [
                'Administrative Law'
            ],
            evaluation: 0            
        };
        Lawyers.insert(data);
    },
    down: function () {

    }
});