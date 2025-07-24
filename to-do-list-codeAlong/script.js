// first step- get elements from html page
const taskInput = document.getElementsByTagName("input")[0]// the 0 is the tag's index number, thre is only one input class in here but make a habbit to select index number
const addBtn = document.getElementById("addBtn"); //we set the id to addBtn in html so that is what goes inn ()
const taskList = document.getElementById("taskList") //the id to the list in html is "taskList" so thats what we put in ()
//when do you want a task added to the list? when the button is clicked, so we need an event listner for that button
//use the button name then the eveent listener click
//taskText is the name we gave this function, its waht the user inputs
//taskInput is the name we used to linnk to the input tag from the html page
//.value means we want whatever the user has input
//console.log the taskText with console.log(taskText) and then go typer something in th einput boxx, click button, and see if it logged it on the consoe under inspect, this means everythinnng is running right so far, remove the console.log
//then we need to add li into the ul element
//create the element using .createElement
//assign the li textContent to equal the taskText (which is what the ser inputs)
//add the element to the dom now
//use our task list name (taskList) .append(li) which means the li element now is attached in our ul element (taskList)
//we want the user to be able to click on a task and is cross out, we put a css style name .done, now we link it here
//so add an event listener to li
//toggle makes it so that if a user clicks on the task once its crossed out but if clicked again it comes bakc, and so on
//test to make sure it works
//now ccreate a remove button to remove a task, name it removeBtn, use.createElement, type the element type
//add the text to the button, use .textContent
//add an eventlistner to the button so something happpens when we click the textContent
//what do you what the button to do? remove the li
//then append the remove button to the li

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value;

    const li = document.createElement("li");

    li.textContent = taskText;

    taskList.append(li);

    li.addEventListener("click", () => {
        li.classList.toggle("done")
    })

    const removeBtn = document.createElement("button")

    removeBtn.textContent = "❌";

    removeBtn.addEventListener("click", () => {
        li.remove();
    })

    li.append(removeBtn);
});