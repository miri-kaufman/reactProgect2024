

export let calcNumOfProductsInOrder=(basket)=>{
let count=0;
    for (let i=0;i<basket.length;i++){
       count+=basket[i].qty;
    }
    return count;
}
export let calcSumOfOrder=(basket)=>{
    let sum=0;
  
        for (let i=0;i<basket.length;i++){
           sum+=basket[i].qty*basket[i].price;
        }
        return sum;
    }