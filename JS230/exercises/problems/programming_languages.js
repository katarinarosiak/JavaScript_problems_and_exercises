document.addEventListener('DOMContentLoaded', () => {
    let button1 = document.querySelector('#button1');  
    let button2 = document.querySelector('#button2');  
    let button3 = document.querySelector('#button3');  

    let box = document.querySelector(".box");
    
    box.addEventListener('click', toggleHidden);



    function toggleHidden(event) {
        if (event.target.tagName === 'BUTTON') {
            let div = event.target.parentNode;
            let spanDots = div.querySelector('.dots'); 
            spanDots.classList.toggle('hidden'); 
            let text = div.querySelector('.hidden_text'); 
            text.classList.toggle('hidden');

            event.target.textContent = event.target.textContent === 'SHOW MORE' ? 'SHOW LESS' : 'SHOW MORE';
        }
    }
}); 


