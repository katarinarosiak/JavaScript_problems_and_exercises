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
          
          let crossDiv = document.createElement('div');
          crossDiv.classList.add('flex-item2');
          let crossImg = document.createElement('img'); 
          crossImg.setAttribute('src', 'cross.png');

          crossImg.addEventListener('click', deleteItem)
          crossDiv.appendChild(crossImg);  

        flexContainer.appendChild(item);
        flexContainer.appendChild(crossDiv);

        list.appendChild(flexContainer); 




      function deleteItem(event) {
        let confirmationBox = document.querySelector('.confirmationBox'); 
        confirmationBox.classList.toggle("visible"); 
        let yes = document.querySelector('.yes');
        
        yes.addEventListener('click', () => {
          let itemParent = event.target.parentNode.parentNode.parentNode;
          let item = event.target.parentNode.parentNode; 
          itemParent.removeChild(item); 
          confirmationBox.classList.toggle("visible"); 
        }); 

        let no = document.querySelector('.no');
        
        no.addEventListener('click', () => {
          confirmationBox.classList.toggle("visible"); 
        }); 
        
      }
      })
})