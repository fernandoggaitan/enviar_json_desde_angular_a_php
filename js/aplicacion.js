angular.module('aplicacion', [])
.controller('ControllerCampeonato', function($scope, $http){
	$scope.campeonato = {
		nombre: '',
		descripcion: '',
		integrantes: []
	};
	$scope.integrante_temporal = {
		nombre: '',
		apellido: ''
	};
	$scope.agregarIntegrante = function(){
		$scope.campeonato.integrantes.push({
			nombre: $scope.integrante_temporal.nombre,
			apellido: $scope.integrante_temporal.apellido
		});
		$scope.integrante_temporal.nombre = '';
		$scope.integrante_temporal.apellido = '';
	};
	$scope.eliminarIntegrante = function(index){
		var integrantes = [];
		angular.forEach($scope.campeonato.integrantes, function(integrante, i) {
        	if(index != i){
        		integrantes.push(integrante);
        	}
      	});
      	$scope.campeonato.integrantes = integrantes;
	};
	$scope.enviar = function(){
		$http.post('enviar_campeonato.php', {
			data: {campeonato: $scope.campeonato}
		}).success(function(response){
			$scope.campeonato.nombre = '';
			$scope.campeonato.descripcion = '';
			$scope.campeonato.integrantes = [];
			console.log(response);
		}).error(function(){
			alert('Error al intentar enviar el campeonato.');
		});
	};
});