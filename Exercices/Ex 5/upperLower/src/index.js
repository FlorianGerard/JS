export function testFn(chaine) {

    chaine = chaine.toLowerCase();
    chaine = chaine.charAt(0).toUpperCase() + chaine.slice(1);
  
    // Ne touchez pas au return :
    return chaine;
}