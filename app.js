document.addEventListener("DOMContentLoaded" , () =>
{
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doodlerLeftSpace = 50;
  let doodlerbottomSpace = 150;
  let isGameOver = false;
  let platformCount = 5;

  function createDoodler(){
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
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
   }

  }

  function start()
  {
    if(isGameOver == false)
    {
        createDoodler();
        createPlatforms();
    }

  }
  
  start()
})