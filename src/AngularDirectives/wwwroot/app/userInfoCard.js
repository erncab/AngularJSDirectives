(function() {
    'use strict';

    angular
        .module('app')
        .directive('userInfoCard', userInfoCard);

    userInfoCard.$inject = ['$window'];
    
    function userInfoCard ($window) {
        // Usage:
        //     <userInfoCard></userInfoCard>
        // Creates:
        // 
        var directive = {
            restrict: 'E',
            templateUrl: "userInfoCard.html"
        };

        return directive;
    }

})();