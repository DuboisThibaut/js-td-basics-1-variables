// Permutation de variables




// Solution classique utilisant une variable temporaire
let firstVar = 1,
    scndVar = 2,
    thrdVar;
console.log(`${firstVar} et ${scndVar}`);
thrdVar = firstVar;
firstVar = scndVar;
scndVar = thrdVar;
console.log(`${firstVar} et ${scndVar}`);



// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */


