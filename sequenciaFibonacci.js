const fibonacci = (num) =>{
    let f1 = 0, f2 =1 , result

    if(num === 0 || num === 1){
        return `${num} pertence a sequência de Fibonacci`
    }
    
    while( f2 < num){
        result = f1 + f2
        f1 = f2
        f2 = result
    }
  return f2 === num ? `${num} pertence a sequência de Fibonacci`: `${num} não pertence a sequência de Fibonacci`
  
}

console.log(fibonacci(22))


