let arr = [
  ["Item 1", "Price: $123.45", "Quantity: 10"],
  ["Item 2", "Price: $67.89", "Quantity: 20"],
  ["Item 3", "Price: $100", "Quantity: 15"]
];

// Define the column index from which you want to extract numbers
let columnIndex = 1; // For example, extracting numbers from the "Price" column

// Iterate over the rows and extract only the numbers from the specific column
arr = arr.map(row => {
  if (row[columnIndex] !== undefined) { // Ensure the column exists
    row[columnIndex] = row[columnIndex].match(/\d+/g)?.join('') || '';
  }
  return row;
});

console.log(arr);
// Output:
// [
//   ["Item 1", "12345", "Quantity: 10"],
//   ["Item 2", "6789", "Quantity: 20"],
//   ["Item 3", "100", "Quantity: 15"]
// ]


//test run  ==> ts-node test.js