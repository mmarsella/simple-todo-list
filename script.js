// Type something in 
// submit the form 
// take that text i submitted
// make a list item 

/*

1)  get the value of something typed in

document.querySelector("input").value ---> gets the value inside the form
*/

/*

2) Create an li

var newLi = documnet.createElement("Li")


3)  Assign its innerText
newLi.innerText = document.querySelector("input").value




4)  Append the li to the ul

document.querySelector("ul").appendChild(newLi)


Grab the form, set a listener for a form submission

*/

// Alternative to window.onload
// document.addEventListener("DOMContentLoaded",function(){})

window.onload = function(){

//Need to stop the default method of a form
// b/c forms refresh pages upon submission

var input = document.querySelector("input");
var form = document.querySelector("form");
var ul = document.querySelector("ul");
var button = document.querySelector("button");

//event --> eventListener
form.addEventListener("submit", function(event){

  // step 0 - stop the default action of the form
  event.preventDefault();
  // step 1 - grab the input value
  var value = input.value;
  // step 2 - create a new list item
  var newLi = document.createElement("li");
  // step 3 - set the innerText of that list item to be the value
  newLi.innerText = value;
  // step 4 - append the list item to the UL
  ul.appendChild(newLi);
  // step 5 - reset the text of the input
  input.value = "";

  // Add span to delete
  var span = document.createElement("span");
  newLi.appendChild(span);
  span.innerText = "Delete";
  span.style.cssFloat = "right";





  addCrossOut(newLi);
  bubbleDelete(span,newLi);

});  // End submit

//create listener for button

button.addEventListener("click",function(){

  var value = input.value;
  // step 2 - create a new list item
  var newLi = document.createElement("li");
  // step 3 - set the innerText of that list item to be the value
  newLi.innerText = value;
  // step 4 - append the list item to the UL
  ul.appendChild(newLi);
  // step 5 - reset the text of the input
  input.value = "";

   // Add span to delete
  var span = document.createElement("span");
  newLi.appendChild(span);
  span.innerText = "Delete";
  span.style.cssFloat = "right";


  addCrossOut(newLi);
  bubbleDelete(span,newLi);

}); // End click


function addCrossOut(li)
{
	li.addEventListener("click", function(){

		li.classList.toggle("completed");
	},false);
}

function bubbleDelete(span,li)
{
	// setting 3rd param to false will let the click on the delete txt to take priority
  span.addEventListener("click",function(){

  //use the parent to remove the child
  li.parentNode.removeChild(li);

  }, false);	
}











}; // End onload

