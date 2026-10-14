const mysql = require("mysql2");

// Configuración de la conexión a MySql
const conexion = mysql.createConnection({
    host: "localhost", // Servidor local 
    user: "root",       // Usuario de MySql
    database: "tienda" // Nombre de nuestra BD
});

// Comprobar si la conexion fue exitosa
conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL: ", error);
        return;
    }
    console.log("Conexión Exitosa con MySQL");
});
// Exportar la conexión para reutilizarla en las rutas del servidor
module.exports = conexion