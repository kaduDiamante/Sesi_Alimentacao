create database Sesi_Alimentãcao_BD

-- CRIANDO AS TABELAS --

create table Desperdicio(
	DIA date,
	QUANTIDADE float,
)

create table Cardapio(
	DIA date,
	CAFE_DA_MANHA varchar(255),
	ALMOCO varchar(255),
	LANCHE_DA_TARDE varchar(255),
)

create table Alunos(
	RM int,
	NOME varchar(255),
	SALA varchar(3),
	HORARIO_CAFE_DA_MANHA varchar(5),
	HORARIO_ALMOCO varchar(5),
	HORARIO_LANCHE_DA_TARDE varchar(5)
)

create table Alimentacao(
	RM int,
	DIA date, -- Na variável tipo bit, o 0 representa FALSE, e o 1 representa TRUE
	CAFE_DA_MANHA bit,
	ALMOCO bit,
	LANCHE_DA_TARDE bit,
)

-- ADICIONANDO AS CHAVES PRIMÁRIAS E ESTRANGEIRAS --

alter table Alunos alter column RM int not null 
alter table Alimentacao alter column RM int not null
alter table Cardapio alter column DIA date not null

alter table Alunos add constraint pk_Alunos primary key (RM)
alter table Alimentacao add constraint pk_Alimentacao primary key (RM)
alter table Cardapio add constraint pk_Cardapio primary key (DIA)

alter table Alimentacao add constraint fk_Alimentacao foreign key (RM) references Alunos(RM)
alter table Alimentacao add constraint fk_Alimentacao_dia foreign key (DIA) references Cardapio (DIA)

alter table Alimentacao add constraint unique_key_Dia unique (RM, DIA)

-- INSERINDO OS INSERTS --

INSERT INTO Desperdicio(DIA, QUANTIDADE)
VALUES
    ('2024-09-12', 23.5),
    ('2024-09-13', 42.3),
    ('2024-09-14', 15.0),
    ('2024-09-15', 8.2),
    ('2024-09-16', 19.7),
    ('2024-09-17', 25.5),
    ('2024-09-18', 32.1),
    ('2024-09-19', 10.3),
    ('2024-09-20', 18.8),
    ('2024-09-21', 22.4);

INSERT INTO  Cardapio(DIA, CAFE_DA_MANHA, ALMOCO, LANCHE_DA_TARDE)
VALUES
    ('2024-09-12', 'Pão com manteiga', 'Arroz, Feijão e Frango', 'Café preto'),
    ('2024-09-13', 'Torrada e Suco', 'Macarrão com Carne', 'Café com leite'),
    ('2024-09-14', 'Ovos mexidos', 'Sopa de legumes', 'Café expresso'),
    ('2024-09-15', 'Iogurte e Granola', 'Peixe grelhado', 'Cappuccino'),
    ('2024-09-16', 'Bolo e Leite', 'Salada e Carne assada', 'Latte'),
    ('2024-09-17', 'Tapioca com queijo', 'Frango ao molho', 'Café preto'),
    ('2024-09-18', 'Pão integral e Chá', 'Feijoada', 'Café com leite'),
    ('2024-09-19', 'Frutas e Iogurte', 'Lasanha', 'Café expresso'),
    ('2024-09-20', 'Pão de queijo', 'Risoto de camarão', 'Cappuccino'),
    ('2024-09-21', 'Cuscuz com ovo', 'Estrogonofe de frango', 'Latte');

INSERT INTO Alunos(RM, NOME, SALA, HORARIO_CAFE_DA_MANHA, HORARIO_ALMOCO, HORARIO_LANCHE_DA_TARDE)
VALUES
    (1017, 'JOÃO SILVA', '1EFA', '07:50', '10:40', '14:00'),
    (1027, 'MARIA OLIVEIRA', '1EFA', '07:50', '10:40', '14:00'),
    (1037, 'CARLOS SOUZA', '1EFA', '07:50', '10:40', '14:00'),
    (1047, 'ANA SANTOS', '6EFB', null, null, '15:10'),
    (1057, 'PEDRO COSTA', '6EFB', null, null, '15:10'),
    (1067, 'LUCAS ALMEIDA', '9EFA', '09:30', null, null),
    (1077, 'FERNANDA LIMA', '9EFA', '09:30', null, null),
    (1087, 'BRUNO RODRIGUES', '9EFA', '09:30', null, null),
    (1097, 'JULIA FERREIRA', '3EM', '09:30', '12:15', '14:45'),
    (1107, 'ROBERTA MARTINS', '3EM', '09:30', '12:15', '14:45');

INSERT INTO Alimentacao(RM, DIA, CAFE_DA_MANHA, ALMOCO, LANCHE_DA_TARDE)
VALUES
    (1017,'2024-09-12', 1, 1, 0 ),
    (1027,'2024-09-12', 1, 1, 1 ),
    (1037,'2024-09-12', 0, 1, 1 ),
    (1047,'2024-09-13', 1, 1, 0 ),
    (1057,'2024-09-13', 1, 0, 1 ),
    (1067,'2024-09-13', 0, 1, 0 ),
    (1077,'2024-09-14', 1, 1, 1 ),
    (1087,'2024-09-14', 1, 0, 1 ),
    (1097,'2024-09-14', 0, 1, 0 ),
    (1107,'2024-09-15', 1, 1, 1 );

-- SELECT 1: Selecionar quantos alunos vão almoçar em determinado dia --

select COUNT(*) as TotalAlmoço from Alimentacao where ALMOCO = 1 and DIA = '2024-09-12' 

-- SELECT 2: Selecionar quantas pessoas vão comer em determinado horario e determindado dia

select COUNT(*) as TotalAlmoço from Alimentacao, Alunos where ALMOCO = 1 and DIA = '2024-09-12' and Alunos.RM = Alimentacao.RM and Alunos.HORARIO_ALMOCO = '10:40'

-- SELECT 3: Selecionar quantas pessoas não vão comer e quem são

select COUNT(*) as TotalQueNãoVãoComer from Alunos where RM not in (select RM from Alimentacao where dia = '15/09/2024')


select * from Alimentacao
select * from Alunos
select * from Desperdicio
select * from Cardapio


