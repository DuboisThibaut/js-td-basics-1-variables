/*****************************
* 10 - Opérateurs de base
*/

// 1. Déclarer les variables now, ageJohn, ageMark, yearJohn et yearMark
// puis affecter aux trois premières les valeurs 2019, 28 et 33
let now, ageJohn, ageMark, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Opérateurs mathématiques

// 2. Affecter à yearJohn sa date de naissance
// (en la calculant à partir de l'année courante et de son âge)
// idem pour yearMark
// puis afficher la date de naissance de John 
// et "Mark est né en …"
let currentYear = new Date().getFullYear()
yearJohn = currentYear - ageJohn;
yearMark = currentYear - ageMark;
console.log(`date de naissance de john ${yearJohn}`)
console.log(`Mark est né en ${yearMark}`)

// 3. Afficher l'année à laquelle nous serons dans deux ans
// le double de l'année
// le dixième de l'année
console.log(`Dans deux ans nous serons en: ${currentYear+2}`)
console.log(`le double de l'année actuelle est: ${currentYear*2}`)
console.log(`le dixième de l'année actuelle est: ${currentYear*0.1}`)



// Opérateurs logiques

// 4. …



// Opérateur typeof

