create table usuarios (
nome_usuario varchar(30) not null primary key, 
senha varchar(20) not null);

insert into usuarios (nome_usuario, senha) values ('nome' , '1234'), ('nome2', '4321');
insert into usuarios (nome_usuario, senha) values ('nome3' , '5432'), ('nome4', '6789');