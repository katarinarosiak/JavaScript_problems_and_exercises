
class CarPage {
    constructor(cars) {
        this.cars = cars;
        this.filters = {
            make:[],
            model:[],
            price:[], 
            year:[]
        }; 
    }

    createFilterData() {
        for (let key in this.filters) {
            cars.forEach(car => {
                if (!this.filters[key].includes(car[key])) {
                    this.filters[key].push(car[key])
                }
            }); 
        }
    }

    createFilter() {
       
        let filterSection = document.querySelector('#filter'); 
        // let labels = Object.keys(this.filters).map(word => word[0].toUpperCase() + word.slice(1));

        Object.keys(this.filters).forEach(label => {
            let filterDiv = document.createElement('div');
            let labelEl = document.createElement('label'); 
            labelEl.textContent = label[0].toUpperCase()+label.slice(1); 
            let select = document.createElement('select'); 

            this.filters[label].forEach(item => {
                let option = document.createElement('option');
                option.value = item; 
                option.textContent = item; 
                select.appendChild(option); 
            })

            filterDiv.appendChild(labelEl);
            filterDiv.appendChild(select);
            filterSection.appendChild(filterDiv); 
        })

        
        let search = document.createElement('button'); 
        search.textContent = 'Filter'
        search.setAttribute('class', 'filter');

        search.addEventListener('click', this.renderDisplay.bind(this)); 

        filterSection.appendChild(search); 

    }

    createCarDisplay(cars) {
        let div = document.createElement('div');
        div.classList.add('display');  
        cars.forEach(car => {
        let carDiv = document.createElement('div'); 
        carDiv.classList.add(".carDiv"); 
        let img = document.createElement('img');
        img.src = this.constructImgName(car);
        let heading = document.createElement('h2');
        heading.textContent = `${car.make} ${car.model}`;
        let year = document.createElement('p');
        year.textContent = `Year: ${car.year}`;
        let price = document.createElement('p');
        price.textContent = `Price: $${car.price}`  
        let buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        
        [img, heading, year, price, buyButton].forEach(el => carDiv.appendChild(el));
        div.appendChild(carDiv);  
    })
        console.log('display created'); 
        return div; 
    }

    constructImgName(car) {
        return `car_filtering_images/${car.make}-${car.model}-${car.year}.jpg`.toLowerCase(); 
    }
    renderDisplay() {

        let filters = [...document.querySelectorAll('#filter div')];
        filters = filters.map(div => {
            let chosenOption = {};
            let select = div.children[1];
            chosenOption[div.firstChild.textContent] = select.options[select.selectedIndex].text;
            return chosenOption; 
        })

        let cars = this.cars.filter(car => {
            return filters.every((filterObj, idx) => {
                let key = Object.keys(filterObj)[0].toLowerCase(); 
                let value = Object.values(filterObj)[0];
                return (car[key].toString() === value) ||  value === 'Any' || value === 'All';
            })
        })
        console.log('data rendered'); 
        let div = document.querySelector(".display");
        let parent = div.parentNode; 
        let newDiv = this.createCarDisplay(cars);
        parent.replaceChild(newDiv, div);
    }

    initiPage() {
        this.createFilterData(); 
        this.createFilter(); 
        this.renderDisplay();
        
    }
}



const cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corrolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];



document.addEventListener('DOMContentLoaded', () => {
    let carPage = new CarPage(cars); 
    carPage.initiPage();


});




