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
	$scope.apellido= user.apellido;
	$scope.email = user.email;
	$scope.edad = user.edad;
	$scope.contrasena = user.contrasena;
	$scope.contrasena2 = user.contrasena2;




	if ($scope.nombre == undefined ) {
		alert("El Campo Nombre esta Vacio")
	}
	if ($scope.apellido == undefined ) {
		alert("El Campo apellido esta Vacio")
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
	if ($scope.contrasena2 == undefined ) {
		alert("El Campo de Confirmar Contraseña esta vacio")
	}
	if (user.contrasena == user.contrasena2) {
		firebase.database().ref('user/').set({
			nombre: user.nombre,
			apellido: user.apellido,
			email: user.email,
			edad: user.edad,
			contrasena: user.contrasena
		});
	}else{
		alert("Las Contraseñas no coinciden")
	}
}
});

