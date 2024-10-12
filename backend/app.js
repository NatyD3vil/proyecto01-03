const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Conexión a base de datos
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'login',
});

// Consultar datos de la tabla creada
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND clave = ?";

  // Verificar datos ingresados
  db.query(sql, [req.body.usuario, req.body.clave], (err, data) => {
    if (err) return res.json({ success: false, message: "Error" });
    if (data.length > 0) {
      return res.json({ success: true, message: "Usuario válido" });
    } else {
      return res.json({ success: false, message: "Usuario no válido" });
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

