app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Il libro dei sogni';
    $scope.promo = 'Grande promozione!';
    /*$scope.product = 
    	{ 
    	  name: 'The Book of Trees', 
    	  price: 19,
          pubdate: new Date('2014', '03', '08')
    	}*/

    $scope.products = 
    [
    	{
            name: 'The Book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/the-book-of-trees.jpg',
            likes: 0
        },
        {
            name: 'Program or be Programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/program-or-be-programmed.jpg',
            likes: 0
        },
        {
            name: 'La divina commedia',
            price: 5546541252451,
            pubdate: new Date('2017', '05', '17'),
            cover: 'https://archive.org/services/img/ladivinacommedi02dantuoft',
            likes: 0
        },
        {
            name: '20000 leghe sotto ai mari',
            price: 8,
            pubdate: new Date('2017', '08', '01'),
            cover: 'https://emutofu.files.wordpress.com/2013/06/0zva.jpg?w=215&h=313',
            likes: 0
        }
    ];
    
    $scope.plusOne = 
        function(index) 
    		  { 
          	$scope.products[index].likes += 1;
    			};
}]);