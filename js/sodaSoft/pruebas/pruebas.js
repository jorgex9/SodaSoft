function prueba_insertarDatosIniciales(){
    prueba_insertBarrios();
    prueba_insertCalendarios();
    prueba_insertCalBarrCLi();
    prueba_insertClientes();
    prueba_insertRecorridos();
}

function prueba_insertClientes(){
  db.transaction(function(tx) {
          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["David", "Rearte", "2", "10.00","1", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Jorge", "Riera", "2", "10.00","2", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Martin", "Quispe", "4", "10.00","3", "malvsdsinas 1232"], null, connection_error);

           tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Osvaldo", "Rodriguez", "7", "10.00","3", "malvsdsinas 1232"], null, connection_error);

           tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Oscar", "Miranda", "6", "10.00","3", "malvsdsinas 1232"], null, connection_error);

           tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Oscar", "Miranda", "14", "10.00","3", "malvsdsinas 1232"], null, connection_error);

           tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Diego", "Verrastro", "3", "10.00","3", "malvsdsinas 1232"], null, connection_error);

           tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Isaura", "Valderrama", "15", "10.00","3", "malvsdsinas 1232"], null, connection_error);

           tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Jose Luis", "Soto", "8", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Teodoro", "Sanchez", "8", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Josefina", "Malvinas", "8", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Maria del Valle", "Rosarina", "9", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Daniela", "Lopez", "9", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Gustavo", "Arias", "9", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Romario", "Cabezas", "18", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Natalia", "Delgado", "18", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Carolina", "Gomez", "16", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Eduardo", "Astrada", "17", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Samanta", "Caucota", "10", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Antonela", "Velazques", "10", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Carlos", "Caceres", "11", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Ana", "Palacios", "12", "10.00","3", "malvsdsinas 1232"], null, connection_error);

          tx.executeSql("INSERT INTO clientes (nombre, apellido, id_barrio, saldo, estado, direccion) VALUES (?, ?, ?, ?, ?, ?)", ["Luis", "Madrid", "13", "10.00","3", "malvsdsinas 1232"], null, connection_error);





        });
}
      
function prueba_insertBarrios(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Cnel Arias", "Zona Sur"], null, connection_error);

          tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Malvinas", "Zona Sur"], null, connection_error);

          tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Cdad de Nieva", "Zona Centro"], null, connection_error);

           tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["139 viviendas", "San Pedrito"], null, connection_error);

            tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["560 viviendas", "San Pedrito"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Alberdi", "San Pedrito"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Azopardo", "San Pedrito"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Alto Comedero A", "Sector A"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Alto Comedero B", "Sector B"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Moreno", "Zona Centro"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Cuyaya", "Zona Centro"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Alto Gorriti", "Zona Centro"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Bajo Gorriti", "Zona Centro"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["19 de Abril", "San Pedrito"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Los Perales", "Zona x"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Alto la Viña", "Zona x"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Bajo la Viña", "Zona x"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Chijra", "Zona x"], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Sargento Cabral", ""], null, connection_error);

             tx.executeSql("INSERT INTO barrios (nombre, descripcion) VALUES (?, ?)", ["Villa San Martin", "Zona Centro"], null, connection_error);





        });
}

function prueba_insertCalendarios(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Lunes", "Mañana"], null, connection_error);

          tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Lunes", "Tarde"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Martes", "Mañana"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Martes", "Tarde"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Miercoles", "Mañana"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Miercoles", "Tarde"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Jueves", "Mañana"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Jueves", "Tarde"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Viernes", "Mañana"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Viernes", "Tarde"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Sabado", "Mañana"], null, connection_error);

              tx.executeSql("INSERT INTO calendarios (dia, turno) VALUES (?, ?)", ["Sabado", "Tarde"], null, connection_error);

        });
}

function prueba_insertCalBarrCLi(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [1, 3, 2], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [2, 15, 2], null, connection_error);



          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [3, 8, 4], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [4, 9,7], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [5, 18, 6], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [6, 16, 14], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [6, 17, 14], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [7, 10, 3], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [7, 11, 3], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [8, 12, 15], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [8, 13, 15], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [9, 2, 8], null, connection_error);
          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [9, 2, 8], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [9, 5, 8], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [9, 4, 8], null, connection_error);


          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [10, 7, 8], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [10, 6, 8], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [10, 14, 8], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [11, 19, 8], null, connection_error);

          tx.executeSql("INSERT INTO calendarios_barrios_clientes (id_calendario, id_barrio, id_cliente) VALUES (?, ?, ?)", [12, 20, 9], null, connection_error);



        });


}

function prueba_insertRecorridos(){
        db.transaction(function(tx) {
          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [1, 2], null, connection_error);

          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [1, 6], null, connection_error);

          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [2, 4], null, connection_error);

          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [2, 7], null, connection_error);

          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [3, 8], null, connection_error);

          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [3, 19], null, connection_error);

          tx.executeSql("INSERT INTO recorridos (id_calendario, id_barrio) VALUES (?, ?)", [4, 9], null, connection_error);

          
        });
  

}

function prueba_dropTable(table){
  db.transaction(function(tx) {
          tx.executeSql("DROP TABLE "+table, []);
        });
}
