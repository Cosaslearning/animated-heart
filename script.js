// Animated Heart 
document.addEventListener('mousemove', function(e){
    let container = document.getElementById('container');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;         
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    
    let size = Math.random() * 80;
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+transformValue+'deg)';
    
    container.appendChild(heart);

    setTimeout(function(){
      heart.remove();
    },1000)
  })