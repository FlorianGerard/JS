export function testFn() {
    // Déclarez en dessous :
    const min = Math.ceil(0);
    const max = Math.floor(10);
    const aleatoire = Math.floor(Math.random() * (max - min +1)) + min;

    // Ne touchez pas au return :
    return aleatoire;
}