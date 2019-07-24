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
		// "fechaFin",
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
		// "fechaFin",
		"usuario",
		"periodo",
		"TipoContrato",
		"Dias"
	],
	headings: {
		"Check": function (h) {
			return <label></label>
		},
		"Acciones": "Actions",
		"codigo": "Code",
		"apellidos": "Surnames",
		"nombres": "First name",
		"NombreEmpresa": "Company",
		"NombreArea": "Area",
		"NombreSede": "Headquarter",
		"documento_usuario": "DNI",
		"rol": "Role",
		"nombre": "Name",
		"name": "Name",
		"direccion": "Direction",
		"empresa": "Company",
		"dominio": "Domain",
		"ip": "Ip",
		"marca": "Brand",
		"password": "Password",
		"puerto": "Port",
		"sede": "Headquarter",
		"serie": "Serie",
		"documento": "RUC",
		"telefono": "Telephone",
		"pais": "Country",
		"estudio_id": "study id",
		"usuario_id": "User id",
		"nivel_id": "level id",
		"tipo_id": "type id",
		"institucion": "institution",
		"nombrenivel": "Level",
		"nombretipo": "Type",
		"desde": "Since",
		"hasta": "Until",
		"experiencia_id": "Experience",
		"idioma": "Language",
		"nivel_lee_id": "Level learning id",
		"nivel_escribe_id": "Level writer id",
		"nivel_habla_id": "Level speak id",
		"nivel de comunicación": "Level speaking",
		"nivel de escritura": "Level writer",
		"nivel de lectura": "Level learning",
		"cargo": "Position",
		"unidad": "Unit",
		"sueldo": "Salary",
		"observacion": "Observation",
		"descripcion": "Description",
		"valor": "Value",
		"vista": "View",
		"crear": "Create",
		"editar": "Edit",
		"eliminar": "Delete",
		"masivo": "Massive",
		"ver": "View",
		"fechaInicio": "Start Date",
		"fechaFin": "End Date",
		"usuario": "User",
		"periodo": "Period",
		"TipoContrato": "Contract Type",
		"Dias": "Days"
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
		"count": "Showing {from} to {to} of {count} records|Total results filtered: {count} records|Total results filtered: One record",
		"first": "First",
		"last": "Last",
		"filter": "Filter:",
		"filterPlaceholder": "Search query",
		"limit": "Records:",
		"page": "Page:",
		"noResults": "No matching records",
		"filterBy": "Filter by {column}",
		"loading": "Loading...",
		"defaultOption": "Select {column}",
		"columns": "Columns"
	}
}]

export default options;