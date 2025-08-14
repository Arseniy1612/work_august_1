//1
const sum = (function(){
    let total = 0;
    return function(){
        let input = prompt("Введіть число:");
        let num = Number(input);
        if (!isNaN(num)) {
            total += num;
        }else{
            alert("ERROR");
        }
        return total;
    };
})();
console.log(sum());
console.log(sum());
console.log(sum());

//2
function multiply(a){
    return function(b){
        return a * b;
    };
}

console.log(multiply(5)(2));

//3
function askNumber(){
    let lastInput = null;
    for(let i = 0; i < 10; i++){
        let num;
        do{
            let input = prompt("Введіть число більше 100:");
            if(input === null){ 
                console.log("Останнє введення:", lastInput);
                return;
            }
            num = Number(input);
            lastInput = input;
        } while(num <= 100 || isNaN(num)); 
        if(num > 100){
            console.log("Останнє введення:", lastInput);
            return;
        }
    }
    console.log("Останнє введення:", lastInput);
}
askNumber();

