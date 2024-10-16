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
const inputText = userIn.value;
userIn.addEventListener("keyup",function(){
    console.log(inputText);
});