
const posibilities = ["Walcz", "Daj z siebie wszystko", "Nie poddawaj się"];

const btn = document.querySelector('.add');
const reset = document.querySelector('.clean');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');

const input = document.querySelector('input');

const addNewOne = (e) =>{
   e.preventDefault();
   const newInput = input.value; 
   posibilities.push(newInput);  
   console.log(posibilities);
   alert(`Dodałeś ${newInput}`);
   input.value = "";
}

const cleanAll = (e) =>{
    e.preventDefault();
    // posibilities.length = 0;
    posibilities.splice(0);
    console.log(posibilities);
    input.value = "";
    h1.textContent = "";
}

const advice = () =>{
    const index = Math.floor(Math.random() * posibilities.length);
    h1.textContent = posibilities[index];
}

const options = () => {
    alert(`Możliwe opcje to:\n${posibilities.join(', \n')}`)
}


btn.addEventListener('click', addNewOne);
reset.addEventListener('click', cleanAll);
showAdvice.addEventListener('click', advice);
showOptions.addEventListener('click', options);
