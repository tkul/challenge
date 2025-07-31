const addButton = document.getElementById("add-item-button");
const input = document.getElementById("item-input");
const ul = document.getElementById("item-list");

const itemList = ["Aubergine", "Tomato", "Zucchini", "Thyme"]

function renderItems() {
    let str = '';
    for (i = 0; i < itemList.length; i++) {
        str = str + '<li> <span>' + itemList[i] + '</span>' + '<button onclick="removeItem(this)" class="delete-button">❌</button> </li>';
        // console.log(itemList[i]);
    }
    ul.innerHTML = str;
}

window.onload = function () {
    renderItems();
}


function addItem() {
    const MAX_CAPACITY = 10;
    const itemName = input.value.trim();

    if (itemName === '') {
        alert('Please enter a valid item name.');
        return;
    }

    if (itemList.includes(itemName)) {
        alert("This item already exists in the list.");
        return;
    }

    if (itemList.length < MAX_CAPACITY) {

        itemList.push(itemName);
        input.value = '';

        console.log(`Item added: ${itemName}`);
        alert(`Item "${itemName}" added successfully!`);

        ul.innerHTML = ''
        renderItems();
    }
    else {
        alert("Inventory is full!");        
        return;
    }
}

function removeItem(button) {
    if (confirm('Are you sure?')) {
        var itemName = button.parentElement.querySelector('span').textContent;
        var index = itemList.indexOf(itemName);
        if (index > -1) {
            itemList.splice(index, 1);
            button.parentElement.remove();
            // console.log(`Removed: ${itemName}`);
            // console.log(itemList);
        }
    }
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

addButton.addEventListener("click", addItem);

