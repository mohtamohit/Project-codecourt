(function () {
	var app = angular.module('main', []);

	app.controller('mainController', function($scope) {
		$scope.question_page = 1;

		$scope.questions = [
			{
				name: "Question 1",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 2",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 3",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 4",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 5",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 6",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 7",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 8",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 9",
				points: "100",
				subs: "1000",
			},
			{
				name: "Question 10",
				points: "100",
				subs: "1000",
			},
		] 

		$scope.langs = [
			{
				name: "C++"
			},
			{
				name: "C"
			},
			{
				name: "Java"
			},
			{
				name: "Python"
			}
		]
	});

	
})();