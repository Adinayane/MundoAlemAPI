create database mundoAlemapi;
use mundoAlemapi;

select * from usuarios;
select * from destinos;
select * from contato;
select * from formaspags;

INSERT INTO `mundoalemapi`.`usuarios` (`cpf`, `nome`, `endereco`, `Uf`, `email`, `senha`) VALUES ('4256', 'Mah', 'Rua P', 'NO', 'mah@email.com', '789');
INSERT INTO `mundoalemapi`.`usuarios` (`cpf`, `nome`, `endereco`, `Uf`, `email`, `senha`) VALUES ('7965', 'Dan', 'Rua E', 'VO', 'dan@email.com', '000');

INSERT INTO `mundoalemapi`.`destinos` (`nomeDestino`, `valorDestino`) VALUES ('Olinda - Pernambuco', '6930.47');
INSERT INTO `mundoalemapi`.`destinos` (`nomeDestino`, `valorDestino`) VALUES ('Nova Iorque - Estados Unidos', '10050.45');

INSERT INTO `mundoalemapi`.`contato` (`assunto`, `email`, `lido`, `mensagem`, `nome`) VALUES ('Destinos', 'cindy@email.com', '0', 'voces tem passagem para o Egito?', 'Cindy');
INSERT INTO `mundoalemapi`.`contato` (`assunto`, `email`, `lido`, `mensagem`, `nome`) VALUES ('Acesso', 'dan@email.com', '1', 'perdi acesso a minha conta.', 'Dan');

INSERT INTO `mundoalemapi`.`formaspags` (`descrPag`) VALUES ('Debito');
INSERT INTO `mundoalemapi`.`formaspags` (`descrPag`) VALUES ('Credito');
