export function sum(a,b){
    return a + b;
}

let str = "I love arrays they are my favorite";

export function divideArr(arr){

  return arr.split(" "); 
     
  
}


console.log(divideArr(str))


export function currCon(a){
    return a.toFixed(2) * 6.75 + ' ' + 'Chinese Yuan';
  }
  
  console.log(currCon(150))

