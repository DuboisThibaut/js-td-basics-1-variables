/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true"). 

BONNE CHANCE 😀
*/
// 1.
const poidsJohn = 80,
      poidsMark = prompt('poids de Mark ?'),
      tailleJohn = 180,
      tailleMark = prompt('taille de Mark ?');

//2.
const BMIJohn = poidsJohn / (tailleJohn * tailleJohn);
const BMIMark = poidsMark / (tailleMark * tailleMark);
console.log(`le BMI de Mark est de ${BMIMark}`)

//3.
let BMIMarkSup;

//4.
if (BMIJohn < BMIMark) {
    BMIMarkSup = true;
    console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${BMIMarkSup}`);
} else if (BMIJohn > BMIMark){
    BMIMarkSup = false;
    console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${BMIMarkSup}`);
} else {
    console.log('ils ont le même BMI')
}