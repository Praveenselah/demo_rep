// Arrow functions
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log("Normal way ", a2);

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3);
// Callback Functions
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));

// Nested functions
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
// BIND FUNCTION
const addTen = outerFun(10);
console.log(addTen(5));

let employee = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}

// Objects declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");
console.log(x);