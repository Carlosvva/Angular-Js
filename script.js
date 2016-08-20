var myapp= angular.module('myapp',[]);
/*function ModeloCtrl($scope) {
	$scope.Nombre="Elena";
}
*/
myapp.controller("ModeloCtrl", function ModeloCtrl($scope){

$scope.register = function(user){

	if (user === undefined || user === null) {
		alert("Tu pinche pancres esta vacio")
	}

	$scope.nombre = user.nombre;
	$scope.email = user.email;
	$scope.edad = user.edad;
	$scope.contrasena = user.contrasena;



	if ($scope.nombre == undefined ) {
		alert("El Campo Nombre esta Vacio")
	}
	if ($scope.email == undefined ) {
		alert("El Campo Email esta Vacio")
	}
	if ($scope.edad == undefined ) {
		alert("El Campo Edad esta vacio")
	}
	if ($scope.contrasena == undefined ) {
		alert("El Campo Contraseña esta vacio")
	}

	console.log(user)



}
});

