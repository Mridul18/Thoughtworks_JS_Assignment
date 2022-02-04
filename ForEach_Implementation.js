const arr=[2,4,5,6,7];

const helperfunc=function helpme(x){
    console.log(x);
}


function ForEach2(callback,arr) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

ForEach2(helperfunc,arr);