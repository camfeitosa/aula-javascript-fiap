function imc() {
  let arrayPeso = [];
  let arrayAltura = [];
  let result = [];
  let contaIMC;

  let peso;
  let altura;

  for (let i = 0; i < 5; i++) {
    peso = Number(prompt("Digite seu peso em kg"));
    altura = Number(prompt("Digite sua altura em metros"));
    contaIMC = peso / (altura * altura)
    arrayPeso.push(peso);
    arrayAltura.push(altura);
    result.push(contaIMC)
  }

for(i = 0; i < result.length; i++){

  console.log(`IMC Pessoa ${i + 1}: ${result[i]}`)

  if(result[i] < 18.5){
    console.log('Abaixo do peso')

  } else if(result[i] >= 18.5 && result[i] < 25){
    console.log('Normal')
   
  } else if (result[i] >= 25 && result[i] < 30) {
    console.log('Sobrepeso')
  
  } else {
    console.log('Obesidade')
  }
}
for(i = 0; i < arrayPeso.length; i++)
    console.log(`Peso Pessoa ${i + 1}: ${arrayPeso[i]}`)

for(i = 0; i < arrayAltura.length; i++)
    console.log(`Altura Pessoa ${i + 1}: ${arrayAltura[i]}`)

}
imc();