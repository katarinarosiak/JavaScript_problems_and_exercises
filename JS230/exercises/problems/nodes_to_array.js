

document.addEventListener('DOMContentLoaded', () => {
    let nodeArr = []; 

    nodeArr.push(nodeToArr(document.body));

    function nodeToArr(elem) {

        return [elem.tagName, [...elem.children].map(el => {
            let arr = []; 
            if (el.children.length === 0) {
                arr.push(el.tagName, []); 
            } else {
                arr.push(el.tagName, nodeToArr(el)); 
            }
            return arr; 
        })]; 

    };


    console.log(nodeArr); 
});
