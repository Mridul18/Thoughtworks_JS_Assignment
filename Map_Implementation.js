const arr=[2,4,5,6,7];

const helperfunc=function helper(x){
    return x*2;
}


function map2(callback,arr)
{
    const resultant_arr=[];
    for(let i=0;i<arr.length;i++)
    {
        resultant_arr.push(callback(arr[i]));
    }
    
    return resultant_arr;
}

const arr2=map2(helperfunc,arr);
console.log(arr2)
