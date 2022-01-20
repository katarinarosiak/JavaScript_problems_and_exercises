// When the user clicks on a navigation link (Articles 1-4), the browser scrolls to that article in the <main> element and adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.
// When the user clicks on an article element or any of its child elements, the browser adds the highlight class to it. If another element already has the highlight class, the browser removes the class from that element.
// When the user clicks anywhere else on the page, the browser adds the highlight class to the main element. If another element already has the highlight class, the browser removes the class from that element.



/*
2. highligt the current element 


*/

document.addEventListener('DOMContentLoaded', () => {
    let ul = document.querySelector('UL'); 
    let highlighted; 
 
    ul.addEventListener('click', event => {
        event.stopPropagation(); 
        event.preventDefault(); 
 
        let id = `#${event.target.textContent.toLowerCase()}`.replace(' ', '-');
        let article = document.querySelector(id);
        let position = article.getBoundingClientRect().top; 
        window.scroll({top: position, left:0, behavior: 'smooth'});

        switchHighlight(article); 
    }, true)

        let main = document.querySelector('main');
        main.addEventListener('click' , event => {
            event.stopPropagation(); 
            switchHighlight(event.target.parentNode);
        }, true); 

        document.body.addEventListener('click', event => {
            event.stopPropagation(); 
            switchHighlight(main); 
        })

    function switchHighlight(node) {
        if (highlighted) highlighted.classList.remove("highlight");
        node.classList.add("highlight");
        highlighted = node;
    } 

}); 