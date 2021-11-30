
// create a for loop to change the list text color to orange
// tag name = li

const list = document.getElementsByTagName ("li");

for(let i = 0; i < list.length; i++){
    list[i].style.color = "orange";
}

// change only the "not-orange" elements to red
// class name = not-orange

const notOrange = document.getElementsByClassName("not-orange");

// the loop scrolls through the entire list to find the not-orange ones and then changes those to red

for(let i = 0; i < list.length; i++){
    notOrange[i].style.color = "red";
}

// put the loops in the correct order, the second loop overrides the first loop 
// because the computer reads from top to bottom

// if they were in the opposite order, they would all remain orange!

