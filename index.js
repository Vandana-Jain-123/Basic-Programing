function checkPrime(num){
    let count=0
 for(let i=1;i<=num;i++){
    if(num%i==0){
        count++
    }
 }
 if(count==2){
    return true 
 }else{
    return false
 }

}
checkPrime(23);

function checkEvenOdd(num){
    for(let i=1;i<=num;i++){
        if (num % i == 0) {

            return true;
        }else{
            return false;
        }
    }

}
checkEvenOdd(13)