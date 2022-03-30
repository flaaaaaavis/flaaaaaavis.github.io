CREATE TABLE alunos (
	id SERIAL,
	name VARCHAR(255),
	cpf CHAR(11),
	description TEXT,
	age INTEGER,
	annual_average NUMERIC(2,2),
	active BOOLEAN,
	height REAL,
	birth_date DATE,
	lesson_time TIME,
	registration_timestamp TIMESTAMP
);
	

SELECT * FROM alunos;