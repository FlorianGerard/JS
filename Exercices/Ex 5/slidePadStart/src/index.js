export function testFn(cb) {
    // Déclarez en dessous :
    let reponse = cb.slice(-4);
    reponse = reponse.padStart(cb.length, '*');
  
    // Ne touchez pas au return :
    return reponse;
 }
