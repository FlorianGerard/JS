export function testFn(objet) {
    // Déclarez en dessous :
    let resultat;

    if( "prenom" in objet && "nom" in objet){
        if(typeof objet.prenom === 'string' && typeof objet.nom === 'string'){
            resultat = true;
        }
        else{
            resultat = false;
        }
    }
    else{
        resultat = false;
    }
  
    // Ne touchez pas au return :
    return resultat;
  }