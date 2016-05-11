import template from './test.html';

export default function(ngModule) {
    ngModule.directive('test', function() {
        return {
            restrict: 'E',
            template: template,
            link: scope => {
                scope.testing = 'W00t!';
            }
        };
    })

    ;
}
