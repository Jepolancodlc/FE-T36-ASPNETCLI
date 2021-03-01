// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function TablaSetUp() {
    // Función para construir la tabla según las tuplas de Productos
    $.ajax(
        {
            url: "https://localhost:44311/api/Products",
            method: 'GET',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            contentType: 'application/json',

            success: function (data) {
                var tabla = [];

                // recorremos el json que nos devuelve la bd y lo printamos como una tabla
                $.each(
                    data, function(key, val) {
                        tabla.push(
                            "<tr id='" + val.productId + "'>" +
                                "<th scope='row'>" + val.productId +"</th>" +
                                "<td>" + val.name + "</td>" +
                                "<td>" + val.category + "</td>" +
                                "<td>" + val.color + "</td>" +
                                "<td>" + val.unitPrice + "</td>" +
                                "<td>" + val.availableQuantity + "</td>" +
                                "<td>" +
                                    "<div class='btn-group' role='group' aria-label='Acciones'>" +
                                        "<button type='button' onclick='getButton("+val.productId+")' class='btn btn-primary'>" +
                                            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-eye-fill' viewBox='0 0 16 16'>" +
                                                "<path d='M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z' />" +
                                                "<path d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z' />" +
                                            "</svg>" +
                                         "</button>" +
                                            "<button type='button' onclick=\"putButton('" + val.productId + "', '" + val.name + "', '" + val.category + "', '" + val.color + "', '" + val.unitPrice + "', '" + val.availableQuantity + "')\" class='btn btn-success'>" +
                                            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-pencil-square' viewBox='0 0 16 16'>" +
                                                "<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />" +
                                                "<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />" +
                                            "</svg>" +
                                        "</button>" +
                                        "<button type='button' onclick='deleteButton(" + val.productId + ")' class='btn btn-danger'>" +
                                            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-trash-fill' viewBox='0 0 16 16'>" +
                                                "<path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />" +
                                            "</svg>" +
                                        "</button>" +
                                    "</div>" +
                                "</td>"+
                            "</tr>"
                        )
                    }    
                );
                // Lo printamos en el contenido de la tabla
                $('#contentTable').append(tabla);

                // llamamos a la función para añadir una fila para hacer post
                nuevaTupla();


            },
            error: function (error) {
                console.log(error);
            }
        }
    );
}

function nuevaTupla() {
    // creamos una fila vacia con inputs para poder hacer un post a la db.
    var tabla = [];
    // llamamos a la función para crear una fila vacia
    tabla.push(
        "<tr id='nuevoProducto'>" +
            "<td><input type='text' disabled class='form - control' placeholder='Nuevo Producto:' aria-label='' aria-describedby='button - addon2'></td>" +
            "<td><input type='text' id='postNombre' class='form - control' placeholder='Nombre' aria-label='' aria-describedby='button - addon2'></td>" +
            "<td><input type='text' id='postCategoria' class='form - control' placeholder='Categoría' aria-label='' aria-describedby='button - addon2'></td>" +
            "<td><input type='text' id='postColor' class='form - control' placeholder='Color' aria-label='' aria-describedby='button - addon2'></td>" +
            "<td><input type='text' id='postPrecio' class='form - control' placeholder='Precio por Unidad' aria-label='' aria-describedby='button - addon2'></td>" +
            "<td><input type='text' id='postCantidad' class='form - control' placeholder='Cantidad Disponible' aria-label='' aria-describedby='button - addon2'></td>" +
            "<td>" +
            "<div class='btn-group' role='group' aria-label='Acciones'>" +
                "<button type='button' onclick='postButton()' class='btn btn-warning'>" +
                    "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='black' class='bi bi-plus-square-fill' viewBox='0 0 16 16'>" +
                        "<path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z' />" +
                    "</svg><strong>Añadir</strong>" +
                "</button>" +
            "</div>" +
            "</td>" +
        "</tr>"
    )

    // Lo printamos en el contenido de la tabla
    $('#contentTable').append($('#contentTable').text + tabla);
}

function getButton(id){
    // Función para mostrar por alert la información de una tubpla pasada por parámetro
        $.ajax({
            url: "https://localhost:44311/api/Products/" +id,
            method: 'GET',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            contentType: 'application/json',

            success: function (data) {
               alert(JSON.stringify(data, undefined, 2));
            },
            error: function (error) {
                console.log(error);
            }
        });
}

function putButton(id, name, category, color, unit, quantity) {
    // Función para editar la tupla. Sustiye los campos de la fila por inputs con el valor actual y un botón para enviar llamando a la función putProducto.

    // vaciamos el contenido del tr
    $('#' + id).empty();

    // creamos la estructura de inputs
    var tabla = [];
    // llamamos a la función para crear una fila vacia
    tabla.push(
        "<td><input type='text' disabled class='form - control' value='" + id + "' aria-label='' aria-describedby='button - addon2'></td>" +
        "<td><input type='text' id='putNombre' class='form - control' value='" + name + "' aria-label='' aria-describedby='button - addon2'></td>" +
        "<td><input type='text' id='putCategoria' class='form - control' value='" + category + "' aria-label='' aria-describedby='button - addon2'></td>" +
        "<td><input type='text' id='putColor' class='form - control' value='" + color + "' aria-label='' aria-describedby='button - addon2'></td>" +
        "<td><input type='text' id='putPrecio' class='form - control' value='" + unit + "' aria-label='' aria-describedby='button - addon2'></td>" +
        "<td><input type='text' id='putCantidad' class='form - control' value='" + quantity + "' aria-label='' aria-describedby='button - addon2'></td>" +
        "<td>" +
        "<div class='btn-group' role='group' aria-label='Acciones'>" +
            "<button type='button' onclick='putProducto("+id+")' class='btn btn-warning'>" +
                "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='black' class='bi bi-pencil-square' viewBox='0 0 16 16'>" +
                    "<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />" +
                    "<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />" +
                "</svg> <strong> Editar </strong>" +
            "</button>" +
        "</div>" +
        "</td>"
    );
    // añadimos la nueva estructura al tr vaciado
    $('#'+id).append(tabla)
}

function putProducto(id) {
    // Función para el get, pasado por parámetro todos los datos
    let name = document.getElementById("putNombre").value;
    let category = document.getElementById("putCategoria").value;
    let color = document.getElementById("putColor").value;
    let unit = document.getElementById("putPrecio").value;
    let quantity = document.getElementById("putCantidad").value;

    $.ajax({
        url: "https://localhost:44311/api/Products/" + id,
        method: 'PUT',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'ProductId': parseInt(id),
            'Name': name,
            'Category': category,
            'Color': color,
            'UnitPrice': parseInt(unit),
            'AvailableQuantity': parseInt(quantity)
        }),

        success: function (data) {
            $('#contentTable').empty();
            TablaSetUp();
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function deleteButton(id) {
    // Función para eliminar un registro, pasado el id por parámetro.
    $.ajax({
        url: "https://localhost:44311/api/Products/" +id,
        method: 'DELETE',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        contentType: 'application/json',

        success: function (data) {
            $('#contentTable').empty();
            TablaSetUp();
        },
        error: function (error) {
            console.log(error);
        }
    });

}

function postButton() {
    // Función para añadir un registro usando los inputs de la fila vacia de la tabla.
    let name = document.getElementById("postNombre").value;
    let category = document.getElementById("postCategoria").value;
    let color = document.getElementById("postColor").value;
    let unit = document.getElementById("postPrecio").value;
    let quantity = document.getElementById("postCantidad").value;


    $.ajax({
        url: "https://localhost:44311/api/Products",
        method: 'POST',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        contentType: 'application/json',
        data: JSON.stringify({
            'Name': name,
            'Category': category,
            'Color': color,
            'UnitPrice': parseInt(unit),
            'AvailableQuantity': parseInt(quantity)
        }),

        success: function (data) {
            $('#contentTable').empty();
            TablaSetUp();
        },
        error: function (error) {
            console.log(error);
        }
    });
}