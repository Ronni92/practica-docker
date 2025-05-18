CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100)
);

INSERT INTO usuarios (nombre) VALUES
('Alice'), ('Bob'), ('Carlos');
