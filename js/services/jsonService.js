app.factory('jsonService', function($resource) {
  return $resource('data/chartData.json');
});