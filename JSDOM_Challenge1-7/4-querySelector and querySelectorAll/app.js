// changes every other item in the list to lightgreen

// why does it start on 1 and not 0?
// why have the caveat in this line instead of within the function?

const listItems = document.querySelectorAll("li:nth-child(even)");

// the const, listItems, has to be in the loop!

for(let i = 0; i < listItems.length; i++){
    listItems[i].style.color = "lightgreen";
}

