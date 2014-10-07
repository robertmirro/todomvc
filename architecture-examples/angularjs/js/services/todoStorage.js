/*global angular */

/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('todomvc')
	.factory('todoStorage', function () {
		'use strict';

		var STORAGE_ID = 'todos-angularjs';

		return {
			get: function () {
				console.log( 'todoStorage: get(STORAGE_ID):' , localStorage.getItem(STORAGE_ID) );
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (todos) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			}
		};
	});
