let tracker = {
    events: [],
    elementsList: [],
    list() {
        return this.events.map(event => {
            let eventName = event.toString().match(/\b[a-z]+\b/gi)[1];
            return {                       
                [eventName] : {
                target : event.currentTarget,
                buttons : event.button,
                clientX : event.clientX,
                clientY : event.clientY,
                layerX : event.layerX,
                layerY : event.layerY
                }
            }
        });
    },
    elements() {
        return [...this.elementsList]
    },
    clear(){
        this.events = []; 
        this.elementsList = []; 
    }
};


function track(callback) {
    return (event) => {
        tracker.events.push(event); 
        tracker.elementsList.push(event.currentTarget)

        callback(event);  
    };
}
