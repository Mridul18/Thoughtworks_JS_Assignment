const arr=[2,4,5,6,7];

const helperfunc=function helper(x){
    return x*2;
}


Array.prototype.map2=function(callback)
{
    const resultant_arr=[];
    for(let i=0;i<this.length;i++)
    {
        resultant_arr.push(callback(this[i]));
    }
    
    return resultant_arr;
}

const arr2=arr.map2(helperfunc);
console.log(arr2);