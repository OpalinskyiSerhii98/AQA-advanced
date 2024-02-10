const car1 = {
    brand: 'BMW',
    model: '525d',
    year: 2011
}

const car2 = {
    brand: 'Audi',
    model: 'A6',
    owner: 'Antony'
}

const car3 = {...car1, ...car2}
console.log(car3)