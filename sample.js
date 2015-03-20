serverTimeApp = angular.module("serverTimeSample", ['ui.bootstrap','serverTime']);

serverTimeApp.run(['$rootScope','serverTimeService',function($rootScope,serverTimeService) {
	var server_time = new Date().getTime() + (60*60*2*1000); //Simulate different server time
    $rootScope.serverClock = serverTimeService.init(server_time);
}]);
