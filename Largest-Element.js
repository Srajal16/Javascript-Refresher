/******************************************************************************

                            Online Javascript Interpreter.
                Code, Compile, Run and Debug javascript program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

// let, var and const 

// String, Number and Boolean


// JavaScript program to find 
// maximum in arr[] of size n 

	function largest(arr) { 
		let i; 
	
		// Initialize maximum element 
		let max = arr[0]; 

		// Traverse array elements 
		// from second and compare 
		// every element with current max 
		for (i = 1; i < arr.length; i++) {
			if (arr[i] > max) 
				max = arr[i]; 
		} 
		
		return max; 
	} 
	
	// Driver code 
	let arr = [10, 324, 45, 90, 9808];
	print("Largest in given array is " + largest(arr));
	



    