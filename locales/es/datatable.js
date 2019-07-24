const options = [{
	rowClassCallback(row) {
		if (row.estado_empleado_hdn != undefined) {
			return row.estado_empleado_hdn === 1 ? 'user-bloqueado' : '';
		}
		if (row.estadoContrato_hdn != undefined) {
			if (row.estadoContrato_hdn == 2) {
				return row.estadoContrato_hdn === 2 ? 'contrato-culminado' : '';
			}
			if (row.estadoContrato_hdn == 3) {
				return row.estadoContrato_hdn === 3 ? 'contrato-vencido' : '';
			}
		}
	},
	filterByColumn: true,
	sortable: [
		"codigo",
		"apellidos",
		"nombres",
		"NombreEmpresa",
		"NombreArea",
		"NombreSede",
		"rol",
		"documento_usuario",
		"direccion",
		"empresa",
		"nombre",
		"pais",
		"documento",
		"telefono",
		"sede",
		"dominio",
		"ip",
		"puerto",
		"password",
		"serie",
		"marca",
		"descripcion",
		"vista",
		// "fechaInicio",
		// "fechaFin"
		"usuario",
		"periodo",
		"TipoContrato",
		"Dias"
	],
	filterable: [
		"codigo",
		"apellidos",
		"nombres",
		"NombreEmpresa",
		"NombreArea",
		"NombreSede",
		"rol",
		"documento_usuario",
		"direccion",
		"empresa",
		"nombre",
		"pais",
		"documento",
		"telefono",
		"sede",
		"dominio",
		"ip",
		"puerto",
		"password",
		"serie",
		"marca",
		"descripcion",
		"name",
		"vista",
		// "fechaInicio",
		// "fechaFin"
		"usuario",
		"periodo",
		"TipoContrato",
		"Dias"
	],
	headings: {
		"Check": function (h) {
			return <label></label>
		},
		"Acciones": "Acciones",
		"codigo": "Código",
		"apellidos": "Apellidos",
		"nombres": "Nombres",
		"NombreEmpresa": "Empresa",
		"NombreArea": "Área",
		"NombreSede": "Sede",
		"documento_usuario": "DNI",
		"rol": "Rol",
		"nombre": "Nombre",
		"name": "Nombre",
		"direccion": "Dirección",
		"empresa": "Empresa",
		"dominio": "Dominio",
		"ip": "Ip",
		"marca": "Marca",
		"password": "Contraseña",
		"puerto": "Puerto",
		"sede": "Sede",
		"serie": "Serie",
		"documento": "RUC",
		"telefono": "Teléfono",
		"pais": "País",
		"estudio_id": "Id estudio",
		"usuario_id": "Id usuario",
		"nivel_id": "Id nivel",
		"tipo_id": "Id tipo",
		"institucion": "Institución",
		"nombrenivel": "Nivel",
		"nombretipo": "Tipo",
		"desde": "Desde",
		"hasta": "Hasta",
		"experiencia_id": "Id experiencia",
		"idioma": "Idioma",
		"nivel_lee_id": "Nivel de lectura id",
		"nivel_escribe_id": "Nivel de escritura id",
		"nivel_habla_id": "Nivel de comunicación id",
		"nivel de comunicación": "Nivel de comunicación",
		"nivel de escritura": "Nivel de escritura",
		"nivel de lectura": "Nivel de lectura",
		"unidad": "Unidad",
		"sueldo": "Sueldo",
		"observacion": "Observación",
		"descripcion": "Descripción",
		"valor": "Valor",
		"vista": "Vista",
		"crear": "Crear",
		"editar": "Editar",
		"eliminar": "Eliminar",
		"masivo": "Masivos",
		"ver": "Ver",
		"fechaInicio": "Fecha Inicio",
		"fechaFin": "Fecha Fin",
		"usuario": "Usuario",
		"periodo": "Periodo",
		"TipoContrato": "Tipo Contrato",
		"Dias": "Días"
	},
	perPage: 5,
	perPageValues: [
		5,
		10,
		25,
		50,
		100
	],
	sortIcon: {
		"is": "fa-sort",
		"base": "fas",
		"up": "fa-sort-up",
		"down": "fa-sort-down"
	},
	texts: {
		"count": "Mostrando  {from} a {to} de {count} registros|Total resultados filtrados: {count} registros|Total resultados filtrados: Un registro",
		"first": "Primero",
		"last": "Último",
		"filter": "Filtrar:",
		"filterPlaceholder": "Consulta de búsqueda",
		"limit": "Registros:",
		"page": "Página:",
		"noResults": "No hay registros coincidentes",
		"filterBy": "Filtrar por {column}",
		"loading": "Cargando...",
		"defaultOption": "Seleccionar {column}",
		"columns": "Columnas"
	}

}]

export default options;