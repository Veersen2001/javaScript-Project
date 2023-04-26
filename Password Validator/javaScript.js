

function matchPassword() {  
   
    let loginbtn = document.getElementsByClassName('submit');
    const pass = document.getElementById('pass').value;
    const repass = document.getElementById('re-pass').value;
    if(pass != repass)  
    {   
      alert("Passwords did not match. Password validation unsuccessful");  
    } else 
    {  
      alert("Password Matched. Password validation Successful"); 
       document.getElementById('submit').innerText = 'Log out';

    }  

}    