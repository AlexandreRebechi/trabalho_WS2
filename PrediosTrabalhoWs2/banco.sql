CREATE TABLE Predios
(
codigo serial NOT NULL PRIMARY KEY,
nome varchar(50) NOT NULL,
numApartamentos INTEGER,
endereco varchar(50) NOT NULL,
aluguel boolean
preco:DECIMAL(10,2)
);


insert into Predios (nome, numApartamentos, endereco, preco) values ('predio1', 10, 'endereco1',true,1500.00), ('predio2', 20, 'endereco2',false,10000.00);

