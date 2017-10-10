function cargar_contenido(id,archivo){
	$(id).load("pages/"+archivo);
}

function generar_metodologia(){
	var datos = {
      'name': 'Definir Corpus',
      'children': [
        { 'name': 'Formatear el corpus',
		'children':[
			{ 'name': 'Ejecutar el proceso de pre-procesamiento', 
			'children':[
				{ 'name': 'Preparar entradas para el LDA', 
				'children':[
					{ 'name': 'Ejecutar implementación del algoritmo LDA',
					'children':[
						{ 'name': 'Presentar resultados'},
					]},
				]},
			]},
		]},   
      ]
    };
    $('#metodologia').orgchart({
		'data' : datos,
	});
}
