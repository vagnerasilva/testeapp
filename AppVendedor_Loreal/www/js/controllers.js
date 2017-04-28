/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function(    $scope,
                                    $ionicModal,
                                    $ionicPopover, 
                                    $timeout,
                                    $firebaseArray,
                                    $firebaseAuth,
                                    $firebaseObject
                                    ) {


        // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado AppCtrl' : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('StartFormCtrl', function(    $scope,
                                    $ionicModal,
                                    $ionicPopover, 
                                    $timeout,
                                    $firebaseArray,
                                    $firebaseAuth,
                                    $firebaseObject
                                    ) {


        // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado StartFormCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });








    $scope.user = {
      title: 'Developer',
      email: '',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };

    $scope.states = ('    SP    AC  AL  AP  AM  BA  CE  DF  ES  GO  MA  MT  MS  MG  PA  PB  PR  PE  PI  RJ  RN  RS  RO  RR  SC  SP  SE  TO').split(' ').map(function(state) {
        return {abbrev: state};
    });







    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    //for (var i = 0; i < navIcons.length; i++) {
     //   navIcons.addEventListener('click', function() {
       //     this.classList.toggle('active');
      //  });
   // }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
      //  document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
       // document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
    //    var content = document.getElementsByTagName('ion-content');
     //   for (var i = 0; i < content.length; i++) {
     //       if (content[i].classList.contains('has-header')) {
     //           content[i].classList.toggle('has-header');
     //       }
    //    }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
     //   var content = document.getElementsByTagName('ion-content');
     //   for (var i = 0; i < content.length; i++) {
     //       if (!content[i].classList.contains('has-header')) {
     //           content[i].classList.toggle('has-header');
     //       }
     //   }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
      //  var fabs = document.getElementsByClassName('button-fab');
     //   if (fabs.length && fabs.length > 1) {
     //       fabs[0].remove();
      //  }
    };
})
.controller('LoginCtrl', function(   $scope,
                                     $timeout, 
                                     $stateParams, 
                                     ionicMaterialInk,
                                     $firebaseAuth,
                                     $firebaseObject

                                     ) {
    
    $scope.loginEmail = function() {
           
        var email="lorealpocadmin@gmail.com"
        var senha="teste123"
        firebase.auth()
          .signInWithEmailAndPassword(email,senha)
              .then(function(result) {
              console.log("Successfully user uid:", $scope.signedInUser);
               console.log(" Atendente"+ $scope.email);
              },
                function(error) {
                    console.log(" Deu ruim "+ error);
                //alert('Please note","Authentication Error'+ error);
              //  console.log(error);
              }
        );
    }// fim da funcao login 

    $scope.loginCreate = function() {

        var email="lorealpocadmin@gmail.com"
        var senha="teste123"
        firebase.auth()
        .createUserWithEmailAndPassword(email,senha)
          .then(function(result) {
            console.log(result);

            },
              function(error) {
                  alert('Erro na criacao '+ error); 
              console.log(error);
              }
          );          

    }

  //  $scope.loginEmail();


    $scope.logout = function() {
    console.log("fazendo logout");
      firebase.auth()
      .signOut().then(function() {
        // Sign-out successful.
        var limpar={};
        $scope.email=null;
        //$scope.usuario= new limpar;
        }, function(error) {
            alert(' Error'+ error);
            console.log(error);
      })
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log("Email: "+ user.email +"ID: " +user.uid );
        console.log(user.displayName);
        signedEmail=user.email;
        signedInUser=user;
        roomId=user.uid;

      

        

        console.log("sala "+roomId);
      }
      else{
        console.log("deslogado");
        //$scope.signedInUser= null;
        roomId=null;
        signedInUser=null;


        
      }
    });
} // logout funcao 

    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();



})

.controller('FriendsCtrl', function(    $scope, 
                                        $stateParams, 
                                        $timeout, 
                                        ionicMaterialInk, 
                                        ionicMaterialMotion,
                                        $firebaseArray,
                                        $firebaseAuth,
                                        $firebaseObject

                                        ) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function(    $scope, 
                                        $stateParams, 
                                        $timeout, 
                                        ionicMaterialMotion, 
                                        ionicMaterialInk,
                                        $firebaseArray,
                                        $firebaseAuth,
                                        $firebaseObject
                                        ) {
    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado ProfileCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();




})

.controller('ActivityCtrl', function(       $scope, 
                                            $stateParams, 
                                            $timeout, 
                                            ionicMaterialMotion, 
                                            ionicMaterialInk,
                                            $firebaseArray,
                                            $firebaseAuth,
                                            $firebaseObject
                                    ) {
    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado ActivityCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function(        $scope, 
                                            $stateParams, 
                                            $timeout, 
                                            ionicMaterialInk, 
                                            ionicMaterialMotion,
                                            $firebaseArray,
                                            $firebaseAuth,
                                            $firebaseObject
                                    ) {

    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado GalleryCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})
.controller('ResultCtrl', function(    $scope, 
                                        $stateParams, 
                                        $timeout, 
                                        ionicMaterialMotion, 
                                        ionicMaterialInk,
                                        $firebaseArray,
                                        $firebaseAuth,
                                        $firebaseObject
                                        ) {
    // Verificando usuario
    firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
            console.log("logado ResultCtrl : "+ user.email +"ID: " +user.uid );
            console.log(user.email);
            $scope.logado=true;
            $scope.email=user.email;

          }
          else{
            console.log("deslogado");
            //$scope.signedInUser= null;
            $scope.logado=false;
            $scope.email=null;
          }
    });


    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();




})
;
