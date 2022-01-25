document.addEventListener('DOMContentLoaded', () => {
    let todo_items = [
        { id: 1, title: 'Homework' },
        { id: 2, title: 'Shopping' },
        { id: 3, title: 'Calling Mom' },
        { id: 4, title: 'Coffee with John '}
      ];

      let list = document.querySelector('.list'); 
      todo_items.forEach(todo => {
          let flexContainer = document.createElement('div');
          flexContainer.classList.add('item',  'flex-container');

          let item = document.createElement('div');
          item.classList.add('flex-item1');
          item.textContent =  todo.title;  
          
          let cross = document.createElement('img');
          cross.classList.add('flex-item2');
          cross.setAttribute('src', 'cross.png');   

        flexContainer.appendChild(item);
        flexContainer.appendChild(cross);

        list.appendChild(flexContainer); 

      })


})