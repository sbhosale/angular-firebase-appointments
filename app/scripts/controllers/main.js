
angular.module('sbhosale.Appointments')

  .controller('MainCtrl', function($rootScope, $scope, $log, $location, version, 
  				$firebaseObject, $timeout, $cookieStore) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

    var ref = new Firebase('https://luminous-heat-8421.firebaseio.com/days');
    //var fb = $firebaseArray(ref);
//luminous-heat-8421
//https://auth.firebase.com/v2/luminous-heat-8421/auth/facebook/callback
	
	//Facebook login
	$scope.login = function() {
		ref.authWithOAuthPopup("facebook", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    $rootScope.authData = ref.getAuth();
		    console.log("Authenticated user with uid:", $scope.authData.uid);
		    $cookieStore.put('loggedin', 'true');
		    $cookieStore.put('displayName', $scope.authData.facebook.displayName);
		    $timeout(function(){
		    	$location.path('/appointments');
		    }, 1);

		  }
		});
	};

	$scope.loggedIn = $cookieStore.get('loggedin');
	$scope.displayName = $cookieStore.get('displayName');

	if($scope.loggedIn == 'true'){
		$scope.loggedOut = "";
	}
	else{
		$scope.loggedOut = "true";
	}

	$scope.logout = function(){
		ref.unauth();
		console.log("Logged Out");
		$cookieStore.put('loggedin', 'false');
		$timeout(function(){
			$location.path('/');
		}, 1);
	}
	
	// function to set the default data
	  $scope.reset = function() {    

	    ref.set({
	      0: {
	        name: 'Monday',
	        slots: {
	          0: {
	            time: '9:00am',
	            booked: false
	          },
	          1: {
	            time: '10:00am',
	            booked: false
	          },
	          2: {
	            time: '11:00am',
	            booked: false
	          },
	          3: {
	            time: '12:00pm',
	            booked: false
	          },
	          4: {
	            time: '1:00pm',
	            booked: false
	          },
	          5: {
	            time: '2:00pm',
	            booked: false
	          },
	          6: {
	            time: '3:00pm',
	            booked: false
	          },
	          7: {
	            time: '4:00pm',
	            booked: false
	          },
	          8: {
	            time: '5:00pm',
	            booked: false
	          },
	          9: {
	            time: '6:00pm',
	            booked: false
	          },
	        }
	      },
	      1: {
	        name: 'Tuesday',
	        slots: {
	          0: {
	            time: '9:00am',
	            booked: false
	          },
	          1: {
	            time: '10:00am',
	            booked: false
	          },
	          2: {
	            time: '11:00am',
	            booked: false
	          },
	          3: {
	            time: '12:00pm',
	            booked: false
	          },
	          4: {
	            time: '1:00pm',
	            booked: false
	          },
	          5: {
	            time: '2:00pm',
	            booked: false
	          },
	          6: {
	            time: '3:00pm',
	            booked: false
	          },
	          7: {
	            time: '4:00pm',
	            booked: false
	          },
	          8: {
	            time: '5:00pm',
	            booked: false
	          },
	          9: {
	            time: '6:00pm',
	            booked: false
	          },
	        }
	      },
	      2: {
	        name: 'Wednesday',
	        slots: {
	          0: {
	            time: '9:00am',
	            booked: false
	          },
	          1: {
	            time: '10:00am',
	            booked: false
	          },
	          2: {
	            time: '11:00am',
	            booked: false
	          },
	          3: {
	            time: '12:00pm',
	            booked: false
	          },
	          4: {
	            time: '1:00pm',
	            booked: false
	          },
	          5: {
	            time: '2:00pm',
	            booked: false
	          },
	          6: {
	            time: '3:00pm',
	            booked: false
	          },
	          7: {
	            time: '4:00pm',
	            booked: false
	          },
	          8: {
	            time: '5:00pm',
	            booked: false
	          },
	          9: {
	            time: '6:00pm',
	            booked: false
	          },
	        }
	      },
	      3: {
	        name: 'Thursday',
	        slots: {
	          0: {
	            time: '9:00am',
	            booked: false
	          },
	          1: {
	            time: '10:00am',
	            booked: false
	          },
	          2: {
	            time: '11:00am',
	            booked: false
	          },
	          3: {
	            time: '12:00pm',
	            booked: false
	          },
	          4: {
	            time: '1:00pm',
	            booked: false
	          },
	          5: {
	            time: '2:00pm',
	            booked: false
	          },
	          6: {
	            time: '3:00pm',
	            booked: false
	          },
	          7: {
	            time: '4:00pm',
	            booked: false
	          },
	          8: {
	            time: '5:00pm',
	            booked: false
	          },
	          9: {
	            time: '6:00pm',
	            booked: false
	          },
	        }
	      },
	      4: {
	        name: 'Friday',
	        slots: {
	          0: {
	            time: '9:00am',
	            booked: false
	          },
	          1: {
	            time: '10:00am',
	            booked: false
	          },
	          2: {
	            time: '11:00am',
	            booked: false
	          },
	          3: {
	            time: '12:00pm',
	            booked: false
	          },
	          4: {
	            time: '1:00pm',
	            booked: false
	          },
	          5: {
	            time: '2:00pm',
	            booked: false
	          },
	          6: {
	            time: '3:00pm',
	            booked: false
	          },
	          7: {
	            time: '4:00pm',
	            booked: false
	          },
	          8: {
	            time: '5:00pm',
	            booked: false
	          },
	          9: {
	            time: '6:00pm',
	            booked: false
	          },
	        }
	      },
	      5: {
	        name: 'Saturday',
	        slots: {
	          0: {
	            time: '9:00am',
	            booked: false
	          },
	          1: {
	            time: '10:00am',
	            booked: false
	          },
	          2: {
	            time: '11:00am',
	            booked: false
	          },
	          3: {
	            time: '12:00pm',
	            booked: false
	          },
	          4: {
	            time: '1:00pm',
	            booked: false
	          },
	          5: {
	            time: '2:00pm',
	            booked: false
	          },
	          6: {
	            time: '3:00pm',
	            booked: false
	          },
	          7: {
	            time: '4:00pm',
	            booked: false
	          },
	          8: {
	            time: '5:00pm',
	            booked: false
	          },
	          9: {
	            time: '6:00pm',
	            booked: false
	          },
	        }
	      },
	    });    

	  };

	// sync as object 
  	var syncObject = $firebaseObject(ref);

  	// three way data binding
  	syncObject.$bindTo($scope, 'days');

  });
