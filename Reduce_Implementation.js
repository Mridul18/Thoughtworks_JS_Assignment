const arr=[1,2,3,4,5];

const funct_help=function(element,acc){
    return acc+element;
}
const reduce2=function(callback,arr,acc){
    for(let i=0;i<arr.length;i++){
        acc=callback(arr[i],acc);
    }
    
    return acc;
}

console.log(reduce2(funct_help,arr,0))