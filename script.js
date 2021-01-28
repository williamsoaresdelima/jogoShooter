const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const aliensImg = ['img/monster-1.png', 'img/monster-2.png', 'img/monster-3.png'];

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

//sobenavinha
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


//atira navinha
function fireLaser(){
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

//cria tiro
function createLaserElement()
{
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition-10}px`;
    return newLaser;
}

//move o tiro
function moveLaser(laser)
{
    let laserInterval = setInterval(() =>{
        let xPosition = parseInt(laser.style.left);
        let yPosition = parseInt(laser.style.top);

        if(xPosition ===340){
            laser.remove();
        }else{
            laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}

// cria alien
function createAliens(){
    let newAlien = document.createElement('img');
    let alienSprite = aliensImg[Math.floor(Math.random() * aliensImg.length)]; //qual alien?
    newAlien.src = alienSprite;
    new.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '370px';
    newAlien.style.top = `${Math.floor(Math.round() * 330) + 30}px`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}

function moveAlien(Alien){

}

window.addEventListener('keydown', flyAhip);