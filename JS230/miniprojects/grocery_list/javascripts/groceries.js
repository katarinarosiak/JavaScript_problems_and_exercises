document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form'); 

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        let itemName = form.querySelector('#name').value;
        let quantity = form.querySelector('#quantity').value;


        let list = document.querySelector('#grocery-list'); 
        let item = document.createElement('li'); 
        item.textContent = `${quantity || 1} ${itemName}`;

        list.appendChild(item);
    })
});
