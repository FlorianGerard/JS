export function testFn(nombre) {
    if(typeof nombre === "number" && !isNaN(nombre)){
        nombre = Number.isInteger(nombre) ? nombre : Number(nombre.toFixed(3));
    }else{
        nombre = "Pas un nombre";
    }
    
    console.log(nombre)
    // Ne touchez pas au return :
    return nombre;
}