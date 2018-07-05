//variables
var enterButton = document.getElementById("enter");
var resetButton = document.getElementById("reset");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//working functions
function inputLength() {
	return input.value.length;
}

function createListElement2() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener("click", function() {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
	// revert input value back to nothing
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	addEditButtons();
	addDeleteButtons();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	addEditButtons();
	addDeleteButtons();
	}
}

//in progress
function addDeleteButtons() {
    var btn = document.createElement("BUTTON");
 	btn.appendChild(document.createTextNode("Delete"));
 	ul.appendChild(btn);
 	}

function addEditButtons() {
    var btn = document.createElement("BUTTON");
 	btn.appendChild(document.createTextNode("Edit"));
 	ul.appendChild(btn);
 	}

function doneItem() {
	document.querySelector("li").classList.toggle("done");
}

function deleteItem() {
	if (document.querySelector("li")[i])
	document.querySelector("li")[i].remove();
}

function resetList() {
	var list = document.querySelectorAll("li");
}

function editTitle() {
	document.querySelector("h1").innerHTML = "<h1>Whatever!</h1>"
}


//events
enterButton.addEventListener("click", addListAfterClick)
resetButton.addEventListener("click", resetList)
input.addEventListener("keypress", addListAfterKeypress)