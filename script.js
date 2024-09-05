// Todo: Make M+ M- and MC functional
let string = "";

// below line - buttons will be a nodeList of all the buttons' class that we have called/selected from HTML with querySelectorAll 
let buttons = document.querySelectorAll('.button');

let memory = 0 ;
let displayElement = document.querySelector('.input');
let memoryDisplayElement = document.querySelector('#memory-display'); 

// below line - convert this nodeList to an array using Array.from(buttons) and then iterate over it using forEach
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      displayElement.value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      displayElement.value = string;
    }
    //parseFloat() = to convert the string to a number. 
    // If the input field is empty, 0 can be used as the default value.
    else if(e.target.innerHTML == 'M+'){
      memory += parseFloat(displayElement.value || "0");
      memoryDisplayElement.innerHTML = `Memory: ${memory}`;
    }
    else if(e.target.innerHTML == 'M-'){
      memory -= parseFloat(displayElement.value || "0");
      memoryDisplayElement.innerHTML = `Memory: ${memory}`;
    }
    else if(e.target.innerHTML == 'MC'){
      memory = 0;
      memoryDisplayElement.innerHTML = `Memory: ${memory}`;
    }
    else{ 
    //console.log(e.target) 
    string += e.target.innerHTML;
    displayElement.value = string;
      }
  })
})