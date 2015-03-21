(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$location']; 

    function mainCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainCtrl';

        vm.user = {
            name: 'Alex',
            address: {
                street: '123 Main St',
                city: 'Ottawa',
                planet: 'Earth'
            },
            friends: [
              'Amélie',
              'Alexia',
              'Alejandra'
            ]
        }

        activate();

        function activate() { }
    }
})();
