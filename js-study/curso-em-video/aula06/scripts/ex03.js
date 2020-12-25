var nome = prompt("Qual é seu nome: ")

document.write(`Seu nome tem ${nome.length} letras<br/>`)
document.write(`Seu nome em maiusculas ${nome.toLocaleUpperCase()}<br/>`)
document.write(`Seu nome em minusculas ${nome.toLocaleLowerCase()}<br/>`)

var n1 = 5.5478

document.write(`Com 'toFixed 2 : ` + n1.toFixed(2)) // limita a 2 casas decimais
document.write(`<br/>Trocando o . pela , : ` + n1.toFixed(2).replace('.' , ',')) // troca o ponto pela virgula
document.write(`<br/>Com 'toFixed 2 : ` + n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // coloca o R$
document.write(`<br/>Com 'toFixed 2 : ` + n1.toLocaleString('en', {style: 'currency', currency: 'USD'})) // coloca o $
