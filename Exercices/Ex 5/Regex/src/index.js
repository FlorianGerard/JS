export function testFn(fichier) {
    // Déclarez en dessous : 
    let reponse = fichier.match(/\.(\w+)/);

    reponse = reponse[1];

  
    // Ne touchez pas au return :
    return reponse;
  }