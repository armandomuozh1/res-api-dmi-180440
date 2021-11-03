Create database if not exists company_180440;

use company_180440;

create table empleados (
	id int(11) not null auto_increment,
    nombre varchar(45) default null,
    salario int(11) default null,
    primary key(id)
);

describe empleados;

insert into empleados values 
	(1, "Armando Muñoz Hernandez", 45000),
    (2, "Emmanuel Muñoz Hernandez", 25000),
    (3, "Aurelio Muñoz Castillo", 110000);
    
select * from empleados;