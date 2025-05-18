const pool = new Pool({
  user: 'admin',
  host: 'my-db',  // Nombre del contenedor de la base de datos
  database: 'mydb',
  password: 'admin',
  port: 5432,
});