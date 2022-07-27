
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}


const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And')
console.log(true && true);

console.log(true && false);


console.log('=======')
console.log(regresaFalse() && regresaTrue()); 
console.log(regresaTrue() && regresaFalse()); 
/// se ignora la siguiente instruccion si el primer es false

console.warn('OR');
console.log(true || false);

console.log(regresaFalse() || regresaTrue()); 
console.log(regresaTrue() || regresaFalse()); 



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
soyFalse = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso' ;
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalse || soyUndefined || regresaTrue() || regresaFalse() ;

console.log({a1, a2, a3, a4, a5})