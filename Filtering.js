/******************************************************************************

                            Online Javascript Interpreter.
                Code, Compile, Run and Debug javascript program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/


//filtering
//find even values out of it.

const arr = [1,2,5,9,7,6]

function filterLogic(n){
    if (n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans  = arr.filter(filterLogic)
print(ans)
