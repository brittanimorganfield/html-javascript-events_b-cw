let textArea = document.getElementById('textArea');
let label = document.getElementById('label');
let userInput = textArea.innerText;


textArea.addEventListener('keydown', ()=>{
     label.innerText =userInput;
    console.log(`this is what you wrote: ${userInput}`);
})