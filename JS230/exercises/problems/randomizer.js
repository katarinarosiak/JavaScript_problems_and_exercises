/*- function 

i: n amount of callbacks 

- call eacg callback at some random point in time between 2 * n sec 
- random execution time 



- choose random time to call the callback: 
    - choose random number anything between 0 and 2

- [...]

- having an array of callbacks 
- iterate through each callback 
- for each one add setTimeout and choose the random time 


- log elapsed time 
 setTimeot -> every one 1 log counter and thejn increment counter 

 */

 function randomizer(...funcs) {
    let sec = 1; 
    let finish = funcs.length * 2+1; 
    let interval = setInterval(() => {
      console.log(sec);
      sec++;  
    }, 1000);
 
   funcs.forEach(func => {
     setTimeout(func, chooseRandom());
   })
 
     setTimeout(() => {
       clearTimeout(interval)
     }, finish*1000)

  }
 
 
 function chooseRandom () {
   return Math.floor(Math.random() * 3000);
 }
 