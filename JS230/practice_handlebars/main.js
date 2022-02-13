document.addEventListener('DOMContentLoaded', () => {
    let products = [{
        name: 'Banana',
        quantity: 14,
        price: 0.79
      }, {
        name: 'Apple',
        quantity: 3,
        price: 0.55
      }];


      let productTemplate = Handlebars.compile(document.querySelector('#productTemplate').innerHTML);
     
      
   
      let newObj = {items: products};  //[{}, {}, {}]

      let ul = document.querySelector('#test');
      ul.innerHTML = productTemplate(newObj);
        

});


/*
    to pass to template  {prop: [1,2,3,]}
*/