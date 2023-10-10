// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/
// 1.
let num1 = 4;
let num2 = 5;

console.log(num1 + num2);
//résultat -> 5
//le '+' realise la somme des deux nombres

// 2.
num1 = '4';
num2 = '5';

console.log(num1 + num2);
//résultat -> 45
//le '+' additionne les deux chaines de caractère

// 3.
num2 = 5;

console.log(num1 + num2);
//résultat -> 45

// 4.
console.log('num1 + num2');
