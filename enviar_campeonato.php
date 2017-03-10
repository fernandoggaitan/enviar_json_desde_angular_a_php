<?php
	$json = file_get_contents('php://input');
	$obj = json_decode($json);
	//Nombre del campeonato.
	$obj->data->campeonato->nombre;
	//Descripción del campeonato.
	$obj->data->campeonato->descripcion;
	//Integrantes.
	foreach($obj->data->campeonato->integrantes as $item){
		//Nombre del participante.
		$item->nombre;
		//Apellido del participante.
		$item->apellido;
	}
	var_dump(json_encode($obj->data->campeonato));