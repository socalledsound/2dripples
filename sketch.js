let cells = []; 
let cols, rows;
let cellSize = 5;

function setup(){
 
    createCanvas(400, 400);
  //  background(0);
frameRate(10); 
    cols = width/cellSize;
    rows = height/cellSize;

    cells = new Array(cols);
    for (let i = 0; i < cells.length; i++){
        cells[i] = new Array(rows);
    }


    for(let i = 0; i < cols; i++){
      for(let j = 0; j < rows; j++){
        cells[i][j] = new Cell(i * cellSize, j * cellSize, cellSize);
      }
    }

  for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) { 
                
                let above = y-1;    
                let below = y+1;    
                let left = x-1;     
                let right = x+1;      
                
                if (above < 0) { above = rows-1; } 
                if (below == rows) { below = 0; }  
                if (left < 0) { left = cols-1; } 
                if (right == cols) { right = 0; }  

               cells[x][y].addNeighbor(cells[left][above]);  
               cells[x][y].addNeighbor(cells[left][y]);    
               cells[x][y].addNeighbor(cells[left][below]);  
               cells[x][y].addNeighbor(cells[x][below]); 
               cells[x][y].addNeighbor(cells[right][below]); 
               cells[x][y].addNeighbor(cells[right][y]); 
               cells[x][y].addNeighbor(cells[right][above]); 
               cells[x][y].addNeighbor(cells[x][above]);   
              }
      }


 }

function draw(){
  background(200);
    for(let x = 0; x < cols; x++){
      for(let y = 0; y < rows; y++){
        cells[x][y].generate(); 
        cells[x][y].show();
      }
    }
}

function Cell(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.neighbors = [];
    this.previousState = 0; 
    this.nextState = ((this.x/width) + (this.y/height)) * this.size;
    this.currentState = this.nextState;

    this.addNeighbor = function(cell){
        this.neighbors.push(cell);
    
    }


    this.generate = function(){
        let total = 0;

        for(let i = 0; i < this.neighbors.length; i++){
          total+=this.neighbors[i].currentState;
        } 
         console.log("total: "+ total); 
         
        let average = int(total/this.neighbors.length);

        if(average == 255){
             this.nextState = 0;
        } else if (average == 0){
             this.nextState = 255; 
        } else {
             this.nextState = this.currentState + average;
              if(this.previousState > 0){this.nextState -= this.previousState;
              }
              if (this.nextState > 255) { this.nextState = 255; 
              } else if (this.nextState < 0) { this.nextState = 0;
            }
       }

       this.previousState = this.currentState;  
    
    }

    this.show = function(){
      this.currentState = this.nextState;
      stroke(255);
      fill(this.currentState);
      ellipse(this.x + this.size/2, this.y + this.size/2, this.size);
    
    }
}
