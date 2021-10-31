# Conway's Game of Life

Web implementation of Conway's Game of Life (https://web.stanford.edu/class/sts145/Library/life.pdf).

It takes as input a pattern represented as a .lif file, which describes the initial configuration - a grid with cells that are either alive or dead.

The game will then run by itself, changing each cell's state according to these rules:
    
    1. Any live cell with two or three live neighbours survives.
    
    2. Any dead cell with three live neighbours becomes a live cell.
    
    3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
    
Create your model or use an existing one (http://www.radicaleye.com/lifepage/patterns/contents.html), and then upload it to see it run: https://simcris1994.github.io/gameOfLifeJS/ 

The program currently works with models that are below a certain size. Future work will definitely take the size of the grid into account.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/7521620/139600319-7c5055f3-a8ba-442b-aed1-3c872643e707.gif)
