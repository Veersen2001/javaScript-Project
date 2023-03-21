function mixColors() {

  let col1 = document.getElementById('color1').value;
  let col2 = document.getElementById('color2').value;

  let result = document.getElementById('result');
  let color1 = col1.toLowerCase();
  let color2 = col2.toLowerCase();
  
  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
         result.value = "Purple";
         result.style.backgroundColor = 'purple';
          break;
        case "yellow":
          result.value = "Orange";
          result.style.backgroundColor = 'Orange';
          break;
        default:
          console.log("Invalid color combination");
          break;
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          result.value = "Purple";
          result.style.backgroundColor = 'purple';
          break;
        case "yellow":
          result.value = "green";
          result.style.backgroundColor = 'green';
          break;
        default:
          console.log("Invalid color combination");
          break;
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          result.value = "Orange";
          result.style.backgroundColor = 'Orange';
          break;
        case "blue":
          result.value = "green";
          result.style.backgroundColor = 'green';
          break;
        default:
          console.log("Invalid color combination");
          break;
      }
      break;
    default:
      console.log("Invalid color combination");
      break;
  }
}



