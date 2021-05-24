class Form {
  constructor() {
    
    bc1 = loadImage("images/bc.jpg"); 
  }

  display(){
    background (bk1)
    var title = createElement('h2')
    title.html("DoN't HiT!!");
    this.title.position(displayWidth/2 - 50, 0);
    
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    
    button.mousePressed(function(){
      input.hide();
      button.hide();
     background (bc1)
      
      var name = input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
