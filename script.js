let nota1 = Number(prompt('Digite sua primeira nota'))
let nota2 = Number(prompt('Digite sua segunda nota'))
let nota3 = Number(prompt('Digite sua terceira nota'))
let media = (nota1 + nota2 + nota3) /3;
 
if (media >= 9) {
  alert("Sua nota é: A");
} else if (media >= 7) {
  alert("Sua nota é: B");
} else if (media >= 6) {
  alert("Sua nota é: C");
} else if (media >= 4) {
  alert("Sua nota é: D");
} else {
  alert("Sua nota é: E");
}