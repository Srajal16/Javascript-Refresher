function square(n){
  return n*n;
}


function cube(n){
  return n*n*n;
}

function someOfSomething(a,b,fn){
  const x = fn(a);
  const y = fn(b);

  return x+y;
}


console.log(someOfSomething(8,5,square))