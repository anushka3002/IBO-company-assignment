
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


// 1. you need to write a function say, getUniqueProductCount which
//  should return count of each Product(as an object) present in the given
//   list of Products considering Product Name as Key.

function getUniqueProductCount(listOfProducts){
    let object={}
    for(let i=0;i<listOfProducts.length;i++){
        object[listOfProducts[i].productName]=object[listOfProducts[i].productName] || 0
        object[listOfProducts[i].productName]++
    }
    console.log(object)
}

getUniqueProductCount(listOfProducts)


