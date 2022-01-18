document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('html').addEventListener('click', () => {
        document.querySelector('#container').style = 'display: none';
        event.stopPropagation();
      }, true);
      
      document.querySelector('#container').addEventListener('click', event => {
  
      });
})
