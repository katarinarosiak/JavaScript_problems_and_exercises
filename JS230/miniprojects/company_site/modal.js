document.addEventListener('DOMContentLoaded', () => {
    let linksTeam = [...document.querySelectorAll("article a")];
    let outputDiv = document.querySelector("#output"); 
    
    // linksTeam.forEach(link => {
    //     link.addEventListener('click', event => {
    //         event.preventDefault(); 
    //         console.log(outputDiv); 
    //         outputDiv.style.visibility = 'visible';
    //     }); 
    // })
    







    // let data = {
    //     crossImg : 'X',
    //     image : 'image',
    //     name: 'Chris', 
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // }

    // let template = Handlebars.compile(document.querySelector('#modal').innerHTML); 
        
    // let filled = template(data, {
    //     noEscape: true
    // }); 
        
    // document.querySelector("#output").innerHTML = filled; 

})
