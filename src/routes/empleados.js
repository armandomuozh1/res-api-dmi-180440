const express = require('express');
const res = require('express/lib/response');
const router = express.Router();



const mysqlConnection = require ('../database');

router.get('/TodoslosEmpleados', (req, res) => {
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
/* API CITAS PARA PWA */
router.get('/CitasAutolavado', (req, res) => {
    mysqlConnection.query('SELECT * FROM citaAutolavado180440', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
router.post('/crearCita', (req, res) => {
    const {id, nombre, apellidos, marca, placas, dia, hora, tipo} = req.body;
    const query = `
        CALL crearCitaAutolavado(?, ?, ?, ?, ?, ?, ?, ?)
    `;
    mysqlConnection.query(query, [id, nombre, apellidos, marca, placas, dia, hora, tipo], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Empleado Guardado'});
        } else {
            console.log(err);
        }
    })
});
/* FIN API CITAS PARA PWA */

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
});

router.post('/create', (req, res) => {
    const {id, nombre, salario, latitud, longitud} = req.body;
    const query = `
        CALL SP_Add_Edit_Empleado(?, ?, ?, ?, ?)
    `;
    mysqlConnection.query(query, [id, nombre, salario, latitud, longitud], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Empleado Guardado'});
        } else {
            console.log(err);
        }
    })
});

router.put('/update/:id', (req, res) => {
    const {nombre, salario, latitud, longitud} = req.body;
    const {id} = req.params;
    const query = 'CALL SP_Add_Edit_Empleado(?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, nombre, salario, latitud, longitud], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Empleado Actualizado'});
        } else {
            console.log(err);
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Empleado Borrado'});
        } else {
            console.log(err);
        }
    })
})

module.exports = router;