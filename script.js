const revealBtn = document.querySelector('.reveal'),
choresEl = document.querySelector('.chores');

console.log(revealBtn);
console.log(choresEl);

//Reveal the chores
function revealChores() {
    if (choresEl.classList.contains('reveal')){
        choresEl.classList.remove('reveal');
    } else {
        choresEl.classList.add('reveal');
    }


}


//Event Listeners
revealBtn.addEventListener('click', revealChores);
