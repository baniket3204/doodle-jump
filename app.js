document.addEventListener("DOMContentLoaded" , () =>
{
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doodlerLeftSpace = 50;
  let startPoint = 150;
  let doodlerbottomSpace = startPoint;
  let isGameOver = false;
  let platformCount = 5;
  let platforms = [];
  let upTimerId
  let downTimerId
  let isJumping 

  function createDoodler(){
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodlerLeftSpace = platforms[0].left
    doodler.style.left = doodlerLeftSpace + 'px';
    doodler.style.bottom = doodlerbottomSpace + 'px';
  }
  
  class Platform {
   constructor(newPlatBottom){
    this.bottom = newPlatBottom
    this.left = Math.random() * 315  // generates number from 1 to 315 doing because our platform width is 85 And GRID WIDTH IS 400 SO 400 - 85 
    this.visual = document.createElement("div")
    
    
    const visual = this.visual
    visual.classList.add('platform')
    visual.style.left =  this.left + 'px';
    visual.style.bottom = this.bottom + 'px';
    grid.appendChild(visual);
   }
  }
 

  function createPlatforms(){
   for(let i=0 ;i<5; i++)
   {
     let platGap = 600 / platformCount;
     let newPlatBottom = 100 + (i * platGap);
     let newPlatform = new Platform(newPlatBottom);
     platforms.push(newPlatform); 
   }
  }

  function moveplatforms(){
   if(doodlerbottomSpace > 200){
    platforms.forEach(platform => {
        platform.bottom = platform.bottom - 4;
        let visual = platform.visual
        visual.style.bottom = platform.bottom + 'px'
    })
   }
  }

  function jump(){
    isJumping = true; 
    upTimerId = setInterval( function(){
     doodlerbottomSpace = doodlerbottomSpace + 20;
     doodler.style.bottom = doodlerbottomSpace + 'px';
     if(doodlerbottomSpace > startPoint + 200)
     {
       fall()
     }
   } , 30)
  }
  
  function fall(){
   isJumping = false
   clearInterval(upTimerId);
   downTimerId = setInterval( function(){
    doodlerbottomSpace = doodlerbottomSpace - 5;
    doodler.style.bottom = doodlerbottomSpace + 'px';
    if(doodlerbottomSpace < 0)
    {
        gameOver()
    }
    
    platforms.forEach(platform => {
     if(
        (doodlerbottomSpace >= platform.bottom) &&
        (doodlerbottomSpace <= platform.bottom + 15)&&
        (doodlerLeftSpace + 60 >= platform.left)&&
        (doodlerLeftSpace <= platform.left + 85) &&
        !isJumping 
     )
     startPoint = doodlerbottomSpace
     jump();
     

    })

   } , 30)
  }

  function gameOver(){
    isGameOver = true;
    clearInterval(downTimerId)
    clearInterval(upTimerId)
  }
  
  function control(e){
  

  }


  function start()
  {
    if(isGameOver == false)
    {
        createPlatforms();
        createDoodler();
        setInterval(moveplatforms , 30);
        jump();
    }

  }
  
  start()
})