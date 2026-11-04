const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = (document.querySelector('#results'));

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height.';
        return;
    }

    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight.';
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
});