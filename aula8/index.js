const nome = 'Lilian';
const sobrenome = 'Miguel';
const idade = 22;
const peso = 55;
const altura = 1.60;
let imc; // pes / (altura * altura )
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2026 - 22


console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa '+ peso + ' kg.');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, sobrenome, 'nasceu no ano de', anoNascimento);