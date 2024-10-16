//task 1: click event
const button = document.getElementById('bttn1');

button.addEventListener("click",function(){
    button.innerHTML = "Clicked!";
});
    


//task 2: mouse event
const hoverdiv = document.getElementById('hover');

hoverdiv.addEventListener("mouseenter",function(){
    hoverdiv.style.backgroundColor = "gray";
});

hoverdiv.addEventListener("mouseleave",function(){
    hoverdiv.style.backgroundColor = "lightgray";
});

//task3: keyboard events
const userIn = document.getElementById('uinput');
userIn.addEventListener("keyup",function(){
    const inText = userIn.value;
    console.log(inText);
});

//task 4: form events
const form = document.querySelector('form');
const userInput = form.querySelector('input'); 

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameText = userInput.value;
    console.log("Submitted Name: " + nameText);
});

//task 5:focus and blur events
const focus = document.getElementById('focus');

focus.addEventListener("focus",function(){
    focus.style.borderColor = "red";
});

focus.addEventListener("blur",function(){
    focus.style.borderColor = "purple";
});

//task 6 event delegation
const list = document.getElementById('list');

list.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "LI"){ //checks which li was clicked
        e.target.style.backgroundColor = "pink";
    }
}); 