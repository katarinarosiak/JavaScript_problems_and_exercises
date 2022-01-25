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
            
        flexContainer.appendChild(item);
        list.appendChild(flexContainer); 
    });

    let contextmenu = document.querySelector('.contextmenu');

    list.addEventListener('contextmenu', handleMenu); 
    document.addEventListener('click', (event) => {
        contextmenu.classList.remove('visible'); 
    }); 





    function deleteItem(item) {
        console.log(item);
        let confirmationBox = document.querySelector('.confirmationBox'); 
        confirmationBox.classList.toggle("visible"); 
        let yes = document.querySelector('.yes');
    
        yes.addEventListener('click', event => {
            if (item.classList.contains('item')) {
                list.removeChild(item); 
            } else {
                list.removeChild(item.parentNode)
            }
            confirmationBox.classList.remove("visible"); 
        }); 

        let no = document.querySelector('.no');
    
        no.addEventListener('click', () => {
            confirmationBox.classList.remove("visible"); 
        }); 
    
    };


    function handleMenu(event) {
        event.preventDefault(); 
        let item = event.target;

        contextmenu.classList.toggle('visible');

        let x = event.clientX;
        let y = event.clientY;
        
        contextmenu.style.left = x + 'px';
        contextmenu.style.top = y + 'px';

        contextmenu.addEventListener('click', event => {
            let button = event.target; 

            if (button.textContent === 'Delete Todo') {
                deleteItem(item);
            }
            contextmenu.classList.remove('visible');
        });
    }
}); 



    
    
//     let list = document.querySelector('.list'); 

//     todo_items.forEach(todo => {

//         let flexContainer = document.createElement('div');
//         flexContainer.classList.add('item',  'flex-container');
        
//         let item = document.createElement('div');
//         item.classList.add('flex-item1');
//         item.textContent =  todo.title;  
        
//         let menuDiv = document.createElement('div');
//         menuDiv.classList.add('flex-item2');
//         let menuImg = document.createElement('img'); 
//         menuImg.setAttribute('src', 'menu.png');
//         menuDiv.appendChild(menuImg);  

//         flexContainer.appendChild(item);
//         flexContainer.appendChild(menuDiv);
//         list.appendChild(flexContainer); 
        
//     });

    
//     list.addEventListener('contextmenu', event => {
//         event.preventDefault(); 
//         console.log(flexContainer); 
//     }); 

//     // flexContainer.addEventListener('contextmenu', handleMenu)

//     let contextmenu = document.querySelector('.contextmenu');
//     document.addEventListener('mousemove', attachMenu);
    

//     function attachMenu(event) {
//         let x = event.clientX;
//         let y = event.clientY;

//         contextmenu.style.left = x + 75 + 'px';
//         contextmenu.style.top = y + 60 + 'px';
//     }
    
    
//     function handleMenu(event) {
//         console.log('here')
//         event.preventDefault();
//         contextmenu.style.visibility = 'visible';

//         //stack the menu in that place
//         //add event hadnlers to the buttons 
//         //case statement to handle what to do 
            

    
//     }
// })