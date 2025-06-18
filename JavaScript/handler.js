function add(a, b) {
    return a + b;
 }
 const x = [22, 11];
 const y = add.apply(null, x);
 console.log(y);

 const examp = {
    construct(x, y) {
       console.log(`Creating new instance of ${x.name}`);
       return new x(...y);
    }
 };
 class tp {
    constructor(name) {
       this.name = name;
    }
 }
 const a = new Proxy(tp, examp);
 const b = new a('Welcome');
