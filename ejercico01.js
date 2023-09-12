

function sumaMultiplosDe3y5(numerolimite) 
{
    let suma=0;
    for(let i=1; i <numerolimite;i++){
        if(i % 3 ==0 || i % 5 ==0)
        {
            suma+=i;
        }
    }

    return suma;
}

const limite=10;
const resultado=sumaMultiplosDe3y5(limite);

console.log(`La suma de los múltiplos de 3 o 5 por debajo de ${limite} es ${resultado}`);