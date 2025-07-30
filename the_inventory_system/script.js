const addButton = document.getElementById("add-item-button");
const input = document.getElementById("item-input");
const ul = document.getElementById("item-list");

const itemList = ["Aubergine", "Tomato", "Zucchini", "Thyme"]

function renderItems() {
    let str = '';
    for (i = 0; i < itemList.length; i++) {
        str = str + '<li>' + '<span>' + itemList[i] + '</span>' + '<button onclick="removeItem(this)" class="delete-button">❌</button>';
    }
    ul.innerHTML = str;

}

window.onload = function () {
    renderItems();
}


function addItem() {
    const itemName = input.value.trim();

    if (itemName === '') {
        alert('Please enter a valid item name.');
        return;
    }

    itemList.push(itemName);
    input.value = '';

    console.log(`Item added: ${itemName}`);
    alert(`Item "${itemName}" added successfully!`);

    ul.innerHTML = ''
    renderItems();
}

function removeItem(button) {
    if (confirm('Are you sure?')) {
        button.parentElement.remove();
    }
}

addButton.addEventListener("click", addItem);


