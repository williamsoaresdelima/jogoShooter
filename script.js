const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

// voa navinha
function flyAhip(event){

    console.log(event.key);
    if(event.key === 'ArrowUp'){
        event.preventDefault();
        moveUp();
    } else if (event.key === 'ArrowDown'){
        event.preventDefault();
        moveDown();
    } else if (event.key === " "){
        event.preventDefault();
        fireLaser();
    }
}

//atira navinha
function fireLaser(){

}

// desce navinha
function moveDown(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "500px"){
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
        
    }

}

function moveUp(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "0px"){
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
        
    }

}

window.addEventListener('keydown', flyAhip);
