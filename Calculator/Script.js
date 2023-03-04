 // alert("Hii,i am simple calculator,num2ou want to calculate numbers.Enter first and second value then press Result button")
 function calculate()
 {

    var num1=document.getElementById('ope1').value;
    var num2=document.getElementById('ope2').value;
  
    var operator = document.getElementById('opr').value
    if( operator =='+')
    {
        var res= parseInt(num1)+parseInt(num2)
    }
    else if( operator =='-')
    {
        var res= parseInt(num1)-parseInt(num2)
    }
    else if( operator =='/')
    {
        var res= parseInt(num1)/parseInt(num2)
    }
    else if( operator =='*')
    {
        var res= parseInt(num1)*parseInt(num2)
    }
    else{
        alert("Invalid Operator")
    }
    
    // insert value in result input
    document.getElementById('res').value = res;
}