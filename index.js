var arr = [30,2,5,14,50,55,1,30,56,55,545,77,3,30,2,5,14,50,55,1,30,56,55,545,77,3];
console.log(arr);
bubl=(arr)=>{
  
  for (let i=0; i < arr.length-1 ; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      let swallow=0;
      if(arr[j]>arr[j+1]){
        swallow=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=swallow;
      }
    }
  }
  
}
bubl(arr)

console.log(arr);