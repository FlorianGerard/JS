export function testFn(nombre) {
    // Déclarez en dessous :
    let texte = '';
    for(let i = 0; i < 5; i++){
        if(typeof nombre === 'number'){
            if(i == 2){
                nombre++;
                continue;
            }
            
            texte += nombre;
            nombre++
            
        }
        else{
            texte = 'Pas un nombre';
        } 
    }
    return texte;
  }