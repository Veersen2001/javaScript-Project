// Color-mixer code



function color_mix(){
    let color1 = document.getElementById('color1').value;
    let color2 = document.getElementById('color2').value;
    let num = 0;
    if(color1 == 'red' && color2 == 'blue' || color1 == 'blue' && color2 == 'red')
    {
        num = 1;
    }
    if(color1 == 'red' && color2 == 'yellow' || color1 == 'yellow' && color2 == 'red')
    {
        num = 2;
    }
    if(color1 == 'blue' && color2 == 'yellow' || color1 == 'yellow' && color2 == 'blue'){
        num = 3;
    }

    switch(num)
    {
    
        case 1:
            document.getElementById('result').value = 'purple';
            break;
        case 2:
            document.getElementById('result').value = 'orange';
            break;
        case 3:
            document.getElementById('result').value = 'green';
            break;
        default:
            document.getElementById('result').value = 'Invalid color combination';
    }

}
