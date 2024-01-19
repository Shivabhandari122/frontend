// Challenge #4

const variable = 20;
const variable1 = '30';

const resultVariable = variable + variable1;

console.log(resultVariable);
// ans: 2030
typeof(resultVariable);
// ans: string

// challenge 5
const objectVariable = {
    property1: 'i am property 1', property2: 'i am property 2', property3: [20, 30, 40]
  };
  undefined
  console.log(objectVariable.property3[2]);
//   ans: 40

// challenges

const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);
undefined
result
false

const expression1 = 100 % 50;
undefined
const expression2 = 100 / 50;
undefined
const expression3 = expression1 < expression2;
undefined 
const expression4 = expression3 && 300 + 5 === 305;
undefined 
const expression6 = !expression4;
undefined
console.log(expression6);
false

//challenge

const myObj = {
  prop1: 'my value',
      prop2: 20
}
undefined
const arr = [40, 10, 2];
undefined
const result1 = myObj.prop2 === (arr[0] / arr[2]);
undefined
console.log(result1);
true

const myObj1 = {
  nestedObject1:{
    price: 100,
        quantity: 5,
  },
  nestedObject2:{
    price: 150,
    quantity: 2,
  }
};
undefined
const myArray = [myObj1.nestedObject1, myObj1.nestedObject2];
undefined
const result2 = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity);
undefined
console.log(result2);
true