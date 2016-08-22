app.directive('hcBarChart', function() {
 return {
  restrict: 'E',
  template: '<div id="container"> Placeholder for chart </div>',
  scope: {
    options: '='
  },
  link: function (scope, element) {
      scope.options.chart.renderTo = 'container';
      scope.chartObj = new Highcharts.Chart(scope.options);
      scope.options = ''; //after usage cleared the value
  }
 }
});