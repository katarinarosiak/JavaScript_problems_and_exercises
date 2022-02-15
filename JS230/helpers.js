function serializeFormDataToQueryStr() {
        
    let form = document.querySelector('form');
    let data = new FormData(form);

    //special fields handling: 
    let concatCCnums = data.getAll("credit_card").join(''); 
    data.delete("credit_card"); 
    data.append("credit_card", concatCCnums); 

    let queryParams = [];

    for (let keyVal of data.entries()) {
        queryParams.push(encodeURIComponent(`${keyVal[0]}=${keyVal[1]}`));
    }

    return queryParams.join('&'); 

}