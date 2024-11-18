function sharePizza(slices, people) {
    let result = 0; 
    result = slices / people;
    return `Each person gets ${result} slices of pizza; from our ${slices} slice pizza`
}

console.log(sharePizza(11, 2));