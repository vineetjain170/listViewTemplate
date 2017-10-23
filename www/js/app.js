angular.module('firstApp',['ionic']).controller('FirstController', function($scope) {
  $scope.itemsList=["Back-Arrow","Car","Cat","Pixels","Right","Sun","SunCloud"];
  $scope.srcsList=["backarrow.jpeg","car.jpeg","cat.png","pixels.png","right.png","sun.png","suncloud.png"];
  $scope.productsImg=["guitar1.jpeg","guitar2.jpeg","guitar3.jpeg"];
  $scope.productsName=["Guitar1","Guitar2","Guitar3"];
  $scope.seller=["by Vineet Jain","by Yathartha Manocha","by Kaushik Raina"];
  $scope.price=["2100","1000","3100"]
  $scope.compProductInfo=[{"url":"guitar1.jpeg","name":"Juarez Acoustic Guitar, 38 Inch Cutaway, 038C With Bag, Strings, Pick And Strap, Black","seller":"by Vineet Jain","price":"2100"},
                          {"url":"guitar2.jpeg","name":"Juarez JRZ38C 6 Strings Acoustic Guitar 38 Inch Cutaway, Right Handed, 3TS Sunburst with Bag, Strings, Picks and Strap","seller":"by Yathartha Manocha","price":"1000"},
                          {"url":"guitar3.jpeg","name":"Jixing JXNG 6 Strings Acoustic Guitars Right Handed With Combo ( Black )","seller":"by Kaushik Raina","price":"3100"}];
});