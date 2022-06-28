const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// 2. you need to write a function say, getUniquePrducts 
// which should return an array of objects by grouping the 
// products based on the productName and summing up the quantity 
// for the same products present in the given list of Products considering Product Name as Key.

function get(listOfProducts){
    let object={}
    let array=[]
    let count=0
    let sum=0
    for(let i=0;i<listOfProducts.length;i++){
        object[listOfProducts[i].productName]=object[listOfProducts[i].productName] || 0
        object[listOfProducts[i].productName]++
    }
    for(let key in object){
        array.push(key)
    }
    let name
    for(let j=0;j<array.length;j++){
    for(let i=0;i<listOfProducts.length;i++){
        if(array[j]==listOfProducts[i].productName){
            sum+=listOfProducts[i].quantity
            name=listOfProducts[i].productName
        }
    }
    for(let k=0;k<listOfProducts.length;k++){
    if(listOfProducts[k].productName==array[j]){
      listOfProducts[k].quantity=sum
      count++
    }
    }
    sum=0
    }
    var dataArr = listOfProducts.map(item=>{
    return [item.productName,item]
    }); 
    var maparr = new Map(dataArr);

    var result = [...maparr.values()];

    console.log(result)
    }
    get(listOfProducts)