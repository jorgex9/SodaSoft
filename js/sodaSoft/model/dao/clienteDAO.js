function clienteDao_getAll(callbackOk, callbackError){
  db.transaction(function(tx) {
          tx.executeSql('select '
                          +' c.*, '
                          +' e.id_estado as id_estado_Testado, e.descripcion as descripcion_Testado '
                          +' barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio '
                        +' from '
                          +' clientes c, estados e, barrios barr '
                        +' where '
                          +' e.id_estado = c.estado and c.id_barrio = barr.id_barrio', [], callbackOk, callbackError);
        },
        function (){
          alert('error');
        },
        function (){
          //alert('ok');
        });
}

function clienteDao_getByDiaTurno(dia, turno, callbackOk, callbackError){
    db.transaction(function(tx) {
          tx.executeSql('select '
                             +' cli.*, '
                             +' est.id_estado as id_estado_Testado, est.descripcion as descripcion_Testado, '
                             +' barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio, '
                             +' (select vi.fecha_visitado from visitas vi where vi.id_cliente = cli.id_cliente) as fecha_visitado_Tvistas '
                        +' from '
                             +' clientes cli, estados est, barrios barr '
                        +' where '
                            +' (cli.estado = est.id_estado and cli.id_barrio = barr.id_barrio) '
                            +' and '
                            +' (cli.id_cliente in '
                                +' ( '
                                    +' select '
                                        +' tea_cal_barr_cli.id_cliente '
                                    +' from '
                                        +' calendarios_barrios_clientes tea_cal_barr_cli '
                                    +' where '
                                        +' tea_cal_barr_cli.id_calendario = (select cal2.id_calendario from calendarios cal2 where cal2.dia = ? and cal2.turno = ?) '
                                +' ) '
                            +' ) '
                          , [dia, turno], callbackOk, callbackError);
        });
}

/*select  cli.*, est.id_estado as id_estado_Testado, est.descripcion as descripcion_Testado,  barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio ,
 (select vi.fecha_visitado from visitas vi where vi.id_cliente = cli.id_cliente) as fecha_visitado_Tvistas 

  from  clientes cli, estados est, barrios barr  
   where  (cli.estado = est.id_estado and cli.id_barrio = barr.id_barrio)  and  (cli.id_cliente in  ( 
                        select  tea_cal_barr_cli.id_cliente  from calendarios_barrios_clientes tea_cal_barr_cli 
                  where  tea_cal_barr_cli.id_calendario = (select cal2.id_calendario from calendarios cal2 where cal2.dia = 'Martes'  and cal2.turno = 'Tarde' ) 
                                                   ) 
                             ) 
  */
   
// **********************Sqlite consuta pura >> **********************************************************
// select  cli.*, est.id_estado as id_estado_Testado, est.descripcion as descripcion_Testado,  barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio 
//   from  clientes cli, estados est, barrios barr   
//   where  (cli.estado = est.id_estado and cli.id_barrio = barr.id_barrio)  and  (cli.id_cliente in  ( 
//                        select  tea_cal_barr_cli.id_cliente  from calendarios_barrios_clientes tea_cal_barr_cli 
//                  where  tea_cal_barr_cli.id_calendario = (select cal2.id_calendario from calendarios cal2 where cal2.dia = 'Lunes'  and cal2.turno = 'Mañana' ) 
//                                                   ) 
//                             )

function clienteDao_getById(idCliente, callbackOk, callbackError){
  db.transaction(function(tx) {
          tx.executeSql('select '
                          +' c.*, '
                          +' e.id_estado as id_estado_Testado, e.descripcion as descripcion_Testado, '
                          +' barr.id_barrio as id_barrio_Tbarrio, barr.nombre as nombre_Tbarrio, barr.descripcion as descripcion_Tbarrio, '
                          +' (select vi.fecha_visitado from visitas vi where vi.id_cliente = c.id_cliente) as fecha_visitado_Tvistas '
                        +' from '
                          +' clientes c, estados e, barrios barr '
                        +' where '
                          +' e.id_estado = c.estado and c.id_barrio = barr.id_barrio and c.id_cliente = ?', [idCliente], callbackOk, callbackError);
        }); 
}

function clienteDao_save (nombre, apellido, direccion, barrio, callbackOk, callbackError){
  db.transaction(function(tx){
          tx.executeSql('INSERT INTO clientes (nombre, apellido, id_barrio, saldo , estado, direccion) VALUES'
            +'(?,?,?,?,?,?)',[nombre, apellido, barrio, 0,2,direccion], callbackOk, callbackError);

  });
  }
