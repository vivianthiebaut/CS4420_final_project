angular.module('RLECtrl', []).controller('RLEController', function($scope) {
    //var runLengthCompressionList = this;

    $scope.data = [];

    //should be in the form (data, int, int)
    //where data is the value being compressed and is not an explicit type
    //where the first int represents the starting index of this data
    //where the second int represents the total # of this data in consecutive order
    $scope.compressedData = [];
    $scope.compressedDataSize = [];
    $scope.compressedDataOffset = [];

    //doesnt actually do anything
    //replace with a compression method
    $scope.rleCompression = function() {
       //TODO compress the list and place the compressed data in runLengthCompressionList.compressedData
       $scope.compressedData.length = 0;
       $scope.compressedDataSize.length = 0;
       $scope.compressedDataOffset.length = 0;
       var size;
       for (var i = 0; i < $scope.data.length; i++) {
           if (i == 0) {
               $scope.compressedData.push($scope.data[i]);
               $scope.compressedDataOffset.push(i);
               size = 1;
           } else if ($scope.data[i] != $scope.data[i-1]) {
               $scope.compressedData.push($scope.data[i]);
               $scope.compressedDataOffset.push(i);
               $scope.compressedDataSize.push(size);
               size = 1;
           } else {
               size += 1;
           }

       }
       $scope.compressedDataSize.push(size);
    }

	$scope.tagline = 'Compress down the pain of languages you don\'t know';


});
