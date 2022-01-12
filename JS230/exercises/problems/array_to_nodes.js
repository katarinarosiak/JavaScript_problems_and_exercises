
document.addEventListener('DOMContentLoaded', () => {
    const nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
    arrayToNodes(nodes); 
    function arrayToNodes(nodes, parent = document) {
        let newEl = document.createElement(nodes[0]);

        if (nodes[0] !== "BODY") {
            parent.appendChild(newEl); 
        } 
        let children = nodes[1]
        if (children.length) {
            children.forEach(childArr => arrayToNodes(childArr, newEl)); 
        }
    }; 
});