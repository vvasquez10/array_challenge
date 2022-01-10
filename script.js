function alwaysHungry(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]==="comida"){console.log("delicioso")}
        else{console.log("Tengo hambre")}
    }
}
   
alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

/////////////////////////////////////////////////////////////////////////////////////////////////////

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>cutoff){  
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

/////////////////////////////////////////////////////////////////////////////////////////////////////

function betterThanAverage(arr) {
    var sum = 0;
    let prom = 0;
    // calcula el promedio
    var count = 0
    // cuenta cuántas variables son mayores que el promedio
    for(let i=0; i<arr.length; i++){
       sum=sum+arr[i];
       prom = sum/(i+1)
    }
    //let prom = sum/arr.length;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>prom){
            count++;
        }
     }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

/////////////////////////////////////////////////////////////////////////////////////////////////////

function reverse(arr) {
    let newArray = [];
    for(let i=arr.length; i>0; i--){
        newArray.push(arr[i-1]);
    }
    return newArray;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

/////////////////////////////////////////////////////////////////////////////////////////////////////

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
        for(let i=0; i<(n-2); i++){
            fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
        }        
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]