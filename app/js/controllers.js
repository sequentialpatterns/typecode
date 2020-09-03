'use strict';
/* Controllers */
angular.module('myApp.controllers', []).
controller('main', function( $scope, $http ){
    $http.get( 'js/story.json' ).success( function( data ){
        $scope.frames = data.frames;
    });
    $scope.int = 0;
    $scope.render = function( int ){
        if( int === $scope.int ){
            $scope.colour = $scope.frames[ $scope.int ].colors.bg;
            return "show";
        } else {
            return "hide";
        }
    }
    $scope.layout = function( int ){
        if( typeof int === 'undefined' )
            return "multicolumn";
    }
    $scope.digits = function( int ){
        if( int === 0 )
            return "one";
        else if ( int > 8 )
            if( int === 9 )
                return "number10";
            else
                return "tens";
    }
    $scope.adventure = function( int ){
        $scope.int = int;
        $scope.colour = $scope.frames[ $scope.int ].colors.bg;
        if( int === 9 )
            $scope.enlarge = true;
        else
            $scope.enlarge = false;
    }
    $scope.choices = function( total, index ){
        if( total > 1 )
            if( index === 0 )
                return "left";
            else
                return "right";
        else
            return "right";
    }
}).run( function( $rootScope, $location, $route ){
    $rootScope.location = $location;
    $rootScope.route = $route;
});