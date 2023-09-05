let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
/* let and const basically replace var . You use let
instead of var and const instead of var if you plan on 
never re-assigning this "variable" (effectively turning it into a 
constant therefore).
let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. 


*/

function varTest() {
    var x = 1;
    {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }

  /*The const declaration creates block-scoped constants, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed. */

  const number = 42;

  try {
    number = 99;
  } catch (err) {
    console.log(err);
    // Expected output: TypeError: invalid assignment to const `number'
    // (Note: the exact output may be browser-dependent)
  }
  
  console.log(number);
  // Expected output: 42