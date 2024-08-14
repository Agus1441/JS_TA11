function duplicados(numeros){
    let duplicados = [];
    for(let i = 0; i<numeros.length ;i++){
        for(let j=0; j<numeros.length; j++){
            if(numeros[i] == numeros[j] && i!=j && !duplicados.includes(numeros[i])){
                duplicados.push(numeros[i]);
            }
        }
    }
    console.log(duplicados);
}

const numeros = [1,2,3,4,5,6,7,8,9,5,3,2]
   

duplicados(numeros);