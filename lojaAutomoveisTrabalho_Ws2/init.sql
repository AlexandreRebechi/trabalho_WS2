CREATE TABLE lojaautomoveistrabalhows2
(
  id serial NOT NULL PRIMARY KEY,
  nomeCaro varchar(50) NOT NULL,
  nomeMarca varchar(50) NOT NULL,
  preco numeric(10,2) NOT NULL,
  anoFabricacao integer NOT NULL
);


insert into lojaautomoveistrabalhows2 (nomeCaro, nomeMarca, preco, anoFabricacao) values ('Celta','chevrolet', 15000.00, 2015), ('320i','BMW', 100000.00, 2010);