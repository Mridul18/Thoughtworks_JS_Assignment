const arr=[2,4,5,6,7];

const helperfunc=function isOdd(x){
    if(x%2==1)return true;
    return false;
}


function filter2(callback,arr)
{
    const resultant_arr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(callback(arr[i])==true)
        resultant_arr.push(arr[i]);
    }
    
    return resultant_arr;
}

const arr2=filter2(helperfunc,arr);
console.log(arr2)

