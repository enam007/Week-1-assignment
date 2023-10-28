/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactions = [
  {
    itemName: 'Item 1',
    category: 'Category A',
    price: 19.99,
    timestamp: '2023-10-28T09:00:00',
  },
  {
    itemName: 'Item 2',
    category: 'Category B',
    price: 14.50,
    timestamp: '2023-10-28T09:15:00',
  },
  {
    itemName: 'Item 3',
    category: 'Category A',
    price: 8.75,
    timestamp: '2023-10-28T10:30:00',
  },
  {
    itemName: 'Item 4',
    category: 'Category C',
    price: 24.99,
    timestamp: '2023-10-28T11:45:00',
  },
  {
    itemName: 'Item 5',
    category: 'Category A',
    price: 12.99,
    timestamp: '2023-10-28T12:00:00',
  },
  {
    itemName: 'Item 6',
    category: 'Category B',
    price: 7.25,
    timestamp: '2023-10-28T13:15:00',
  },
  {
    itemName: 'Item 7',
    category: 'Category C',
    price: 32.50,
    timestamp: '2023-10-28T14:30:00',
  },
  {
    itemName: 'Item 8',
    category: 'Category A',
    price: 15.75,
    timestamp: '2023-10-28T15:45:00',
  },
  {
    itemName: 'Item 9',
    category: 'Category B',
    price: 11.49,
    timestamp: '2023-10-28T16:00:00',
  },
  {
    itemName: 'Item 10',
    category: 'Category C',
    price: 28.99,
    timestamp: '2023-10-28T17:15:00',
  },
];

function calculateTotalSpentByCategory(transactions) {
  const Output ={}
  for (let i=0;i<transactions.length;i++){
    console.log(transactions[i].category);
    let cat = transactions[i].category
    if (!Output.hasOwnProperty(cat)){
      Output[cat] = transactions[i].price
      console.log(Output[cat])
    }
    else {
      Output[cat] = Output[cat]+transactions[i].price
    }
  }
    
   //console.log(Output); 
  return [Output];
}
const data= calculateTotalSpentByCategory(transactions);


console.log(data);


module.exports = calculateTotalSpentByCategory;
