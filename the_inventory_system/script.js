const addButton = document.getElementById("add-item-button");
const input = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem() {
    const itemName = input.value.trim();

    if (itemName === '') {
        alert('Please enter a valid item name.');
        return;
    }

    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <span>${itemName}</span>
        <button onclick="removeItem(this)" class="delete-button">❌</button>
    `;

    itemList.appendChild(newItem);
    // sonrasında temizlemen lazım input kısmını 
    input.value = ''; // basit ve mantıklı bence

    console.log(`Item added: ${itemName}`);
    alert(`Item "${itemName}" added successfully!`);
}

function removeItem(button) {
    if (confirm('Are you sure?')) {
        button.parentElement.remove();
    }
    // ilk baştaki itemlardaki butonların çalışmasını ekle
}

addButton.addEventListener("click", addItem);


// localStorage işlemini yap
