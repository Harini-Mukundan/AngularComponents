app.controller('barChartController', ['$scope','jsonService', function($scope, jsonService) {
  $scope.chartOptions = '';
  jsonService.get(function(data) {
     $scope.chartOptions = data.chartData;
     //Configure chart options
     $scope.chartOptions.chart.type = "bar";
     $scope.chartOptions.title.text = "Purchase Data";
     $scope.chartOptions.xAxis.categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     $scope.chartOptions.xAxis.title.text = "Month";
     $scope.chartOptions.series.push ({
       data : [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]});
     });
}]);
