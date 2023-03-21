

let startNumber = document.getElementById('start_number');
let stopNumber = document.getElementById('stop_number');
let result = document.getElementById('result');
// start random number 
function Random_number(){
    let input = "Start Timing";
    let random = Math.random();
    result.style.color = 'red';
     document.getElementById('result').innerHTML = input +' '+ random;
}

// set time Interval
let time = '';

startNumber.addEventListener('click',() => {
    time = setInterval(Random_number,3000);
})

// stop time Interval

stopNumber.addEventListener('click', () => {

    clearInterval(time);
})