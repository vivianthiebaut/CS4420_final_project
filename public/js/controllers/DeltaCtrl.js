angular.module('DeltaCtrl', []).controller('DeltaController', function($scope) {
    //var runLengthCompressionList = this;

    $scope.data = [];

    //should be in the form (data, int, int)
    //where data is the value being compressed and is not an explicit type
    //where the first int represents the starting index of this data
    //where the second int represents the total # of this data in consecutive order
    $scope.compressedData = [];


    //doesnt actually do anything
    //replace with a compression method
    $scope.deltaCompression = function() {
       //TODO compress the list and place the compressed data in runLengthCompressionList.compressedData
       $scope.compressedData.length = 0;
       for (var i = 0; i < $scope.data.length; i++) {

           if (i == 0) {
               $scope.compressedData.push($scope.data[i]);
           } else {
               $scope.compressedData.push($scope.data[i]-$scope.data[0]);
           }
       }
    }

	$scope.tagline = 'Compress down the pain of languages you don\'t know';


});
