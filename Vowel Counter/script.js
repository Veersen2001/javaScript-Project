
// JavaScript Code of count Vowel
function vowel_counter(){

    let name1 = document.getElementById('name').value;
    
    let count = 0;

    let temp;

    for(let i=0; i<=name1.length;i++)
    {
        // temporary variable
        temp = name1[i];

        // check vowel in name 
        if(temp == 'a'|| temp == 'A' || temp == 'i' ||  temp == 'I' ||  temp == 'u' || temp == 'U' ||  temp == 'e' || temp == 'E' || temp == 'o' || temp == 'O')
        {
            count++;
        }

    }

    alert(`Total Number of Vowel: ${count} `);
}