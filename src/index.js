import angular from 'angular';
import test from './component/test';
import { isUndefined } from 'lodash';

const main = angular.module('Main', []);
test(main);

main.controller('MainCtrl', $scope => {
    $scope.main = `This is truly fubar, right?` + (isUndefined(undefined) ? ' holla' : ' wolla');
});
