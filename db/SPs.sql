create procedure SP_Add_Edit_Empleado (
	IN _id int,
    IN _nombre varchar(45),
    IN _salario int
)
begin
	if _id = 0 Then
		insert into empleados (nombre, salario)
        values (_nombre, _salario);
        set _id = last_insert_id();
	else
		update empleados
        set
			nombre=_nombre,
            salario=_salario
            Where id = _id;
	end if
    
    select _id as id;
end