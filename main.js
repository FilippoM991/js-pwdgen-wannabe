alert('Tre facili domande ti separano da una password nuova fiammante!')
var nome = prompt('Qual è il tuo nome?')
var cognome = prompt('Qual è il tuo cognome?')
var colore = prompt('Qual è il tuo colore preferito?')
document.getElementById('password-completa').innerHTML = nome + cognome + colore;
