# Path-Finding-Visualizer
Visualize common pathfinding algorithms through the animations of this application!
 I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them in action. I hope that you enjoy playing around with this visualization tool just as much as I enjoyed building it. You can access it here (use Google Chrome!):
 
 ## Features

1. Interactive with Touch/Pen Input supported
2. Fully optimized for low-end Mobiles and Tablet devices.
3. Responsive Design
4. All the Basic and Advance Path Finding algorithms
5. Easy to extend API to check your own pathfinding algorithm
6. Fast, Medium, Slow and Step Wise execution for better understanding of Algorithm.
7. Customizable Grid system (Colors, Execution Speed, Pause, Resume, Stop)
8. Some of Maze Generation Algorithms included (more coming soon)

### Note

_Use Latest Chrome/ Chromium Browsers/ Safari (mobile/ Tablets/ Desktop)_

### Implemented Path Finding Algorithms

- [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search)
- [Breadth First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Bi-Directional Search](https://en.wikipedia.org/wiki/Bidirectional_search)
  - [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search)
  - [Breadth First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra's_algorithm)
- [A\* Search Algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)
  - [Manhattan Heuristic](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html#diagonal-distance)
  - [Euclidean Heuristic](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html#euclidean-distance-squared)
  - [Diagonal Heuristic](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html#diagonal-distance)
    - [Chebyshev distance](http://en.wikipedia.org/wiki/Chebyshev_distance)
    - [Octile distance](https://www.sciencedirect.com/science/article/pii/S1000936116301182)
- [Best First Search](https://en.wikipedia.org/wiki/Best-first_search) (Next Update)

### Implemented Maze Algorithms

- Random Maze Generator
  <!-- - Recursive Division (Update soon) -->

### How To Implement My Own Algorithm

Path-Finding Visualizer all the algorithms are based on Runner class
it's a simple class with three main methods

## How to use ##
### Setting the starting node and the target node ###
If you want to move the starting node and target node from their default location, you can simply right click them and drag them around the board.
### Adding and deleting a wall ###
The white tiles on the board are the only ones that can be used to place wall nodes. To delete a wall, you can right click the tiles that are marked as obstructed. The obstructions can be cleared with a button if you've placed too many obstacles on the board or created a maze.
### Choosing an algorithm ###
The A* algorithm is selected by default. You can select a different a algorithm by clicking the other boxes on the left panel.
### Visualize! ###
After you set your configurations, you can now press the "Visualize" button at the middle-top of the screen.
