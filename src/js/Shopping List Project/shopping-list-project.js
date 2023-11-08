const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function displayItems () {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDom(item));
    checkUI();
}
function onAddItemSubmit(e) {
    e.preventDefault();
    const newItem = itemInput.value;
//Validate Input
    if (newItem === '') {
        alert('Please add an Item');
        return;
    }
    // Create item Dom element
    addItemToDom(newItem);
    // Add item to local storage
    addItemToStorage(newItem);
    checkUI();
    itemInput.value = '';
}
function addItemToDom(item) {
    // Create List Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
//Add li to the DOM
    itemList.appendChild(li);
}
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();
    //Add new Item to array
    itemsFromStorage.push(item);
    //Convert to JSON String and set to local Storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}
function getItemsFromStorage() {
    let itemsFromStorage;
    //Checking if no items in storage = [] empty Array
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'))
    }
    return itemsFromStorage;
}
function onClickItem (e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    }
}
// Delete Single Items
function removeItem(item) {
    if (confirm('Are you Sure ?')) {
        //Remove Item for DOM
        item.remove();
        //Remove Item from Storage
        removeItemFromStorage(item.textContent);
        checkUI();
    }
}
function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();
    //Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
    //Re-set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
// Delete All Items
function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    //clear from local storage
    localStorage.removeItem('items');
    checkUI();
}
// Filtering
function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}
//Initialize App
function init() {
    //Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems)

    checkUI();
}
init();
