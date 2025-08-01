const addButton = document.getElementById("add-item-button");
const input = document.getElementById("item-input");
const ul = document.getElementById("item-list");
const MAX_CAPACITY = 10;

const itemList = ["Aubergine", "Tomato", "Zucchini", "Thyme"]

function renderItems() {
    ul.innerHTML = ''
    let str = '';
    for (i = 0; i < itemList.length; i++) {
        str += '<li> <span>' + itemList[i] + '</span>' + '<button onclick="removeItem(' + i + ')" class="delete-button">❌</button> </li>';
        // console.log(itemList[i]);
    }
    ul.innerHTML = str;
}

function addItem() {
    const itemName = input.value.trim();
    
    if (itemName === '') {
        alert('Please enter a valid item name.');
        return;
    }

    if (itemList.includes(itemName)) {
        alert("This item already exists in the list.");
        return;
    }
    
    if (itemList.length >= MAX_CAPACITY) {
        alert("Inventory is full!");
        return;
    }
    
    itemList.push(itemName);
    input.value = '';
    
    console.log(`Item added: ${itemName}`);
    alert(`Item "${itemName}" added successfully!`);
    
    renderItems();
}

function removeItem(index) {
    if (confirm('Are you sure?')) {
        if (index > -1) {
            itemList.splice(index, 1);
            renderItems();
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

window.onload = function () {
    renderItems();
}

addButton.addEventListener("click", addItem);
const buttonpng = document.getElementById("item-btn");
buttonpng.addEventListener('click', function () {
    alert("Thank you for visiting Remy's Kitchen :)");
});
