console.log('I Love You');
let rainContainer = document.getElementById('rain');



function rainContent(){
  let count = 100;
  let i = 0;
  while(i < count){
    let drop = document.createElement('i');
    rainContainer.appendChild(drop);
    i++;
    
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * rainContainer.offsetWidth);
    
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;
    
    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = 1+ delay + 's';
    drop.style.animationDuration = duration + 's';
  }
}

rainContent();
