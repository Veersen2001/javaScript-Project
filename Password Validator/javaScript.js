

function matchPassword() {  
   
    let loginbtn = document.getElementsByClassName('submit');
    let pass = document.getElementById('pass').value;
    let repass = document.getElementById('re-pass').value;
    if(pass != repass)  
    {   
      alert("Passwords did not match. Password validation unsuccessful");  
    } else 
    {  
      alert("Password Matched. Password validation Successful"); 
       document.getElementById('submit').innerHTML = 'Log out';

    }  

}    