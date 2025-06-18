// Define a string variable 
let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);

// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

let str = "Mind, Power, Soul";
let part = str.substring(6, 11);
console.log(part);

let par = str.substr(6, 5);

// Output the value of variable
console.log(par);

let re = str.replace("Power", "Space");

// Output the resulting string after replacement
console.log(re);

// Define a string variable 'str'
let sr = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
let pt = sr.replaceAll("Power", "Space");

// Output the resulting string after replacement
console.log(pt);

// Define a string variable
let gfg = 'GFG ';

// Define another string variable 
let geeks = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to uppercase using the toUpperCase() method
console.log(geeks.toUpperCase());
console.log(geeks.toLowerCase());
console.log(gfg.concat(geeks));

let newGfg = gfg.trim();

// Old length
console.log(gfg.length);

// New length
console.log(newGfg.length)

// Define a string variable 
let tr = "  Soul";

// Output the original value of the string 
console.log(tr);

let partt = tr.trimStart();

console.log(partt);

let te = "Soul  ";

console.log(te);

let trimmed = te.trimEnd();

console.log(trimmed);

// Define a string variable 
let stone = "Soul";

// Use the padStart() method to add padding characters "Mind "
//to the beginning of the string 'stone' 
stone = stone.padStart(9, "Mind ");

// Output the resulting string after padding
console.log(stone);

stone = stone.padEnd(10, " Power");
console.log(stone);