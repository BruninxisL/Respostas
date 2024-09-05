const palavra = p=>{
    let ocorrencia = 0
    
    for(let i = 0; i < p.length; i++){
       if(p[i] === 'a' || p[i] ==='A'){
            ocorrencia++
        }
    }
    return ocorrencia > 0 
    ? `Temos ${ocorrencia} letra(s) 'a' ou 'A' na palavra ${p}` 
    : `Não há nenhuma letra 'a' ou 'A' palavra ${p}` 
   
}

console.log(palavra('abacate'))