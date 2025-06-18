const language = {
    set current(name) {
      this.log.push(name);
    },
    log: [],
  };
  
  language.current = "EN";
  console.log(language.log); // ['EN']
  
  language.current = "FA";
  console.log(language.log); // ['EN', 'FA']

  // using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);

// using string
let s3 = new Set("fooooooood");
console.log(s3);

// an empty set
let s4 = new Set();
console.log(s4);

let sample = new Set();
sample.add("Hello");
sample.add("Geek");
sample.add("How");
sample.add("Are");
sample.add("You")

let getit = sample[Symbol.iterator]();
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());
console.log(getit.next());