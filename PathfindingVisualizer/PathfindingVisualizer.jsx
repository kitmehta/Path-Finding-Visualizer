import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getNodesInShortestPathOrder} from '../algorithms/dijkstra';

import './PathfindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;


export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            grid: [],
        };
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
    }

    handleMouseDown(row,col) {
        const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
        this.setState({grid: newGrid, mouseIsPressed: true});
    }

    handleMouseEnter(row, col) {
        if (!this.state.mouseIsPressed) return;
        const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
        this.setState({grid: newGrid});
    }

    handleMouseUp() {  /// when realse not pressed 
        this.setState({mouseIsPressed: false});
    }

    animateDijakstra(visitedNodesInOrder) {    // Method to animate around Dijkstra
        for (let i = 0; i<= visitedNodesInOrder.length; i++) {
            if(i=== visitedNodesInOrder.length)
            setTimeout(() => {
                this.animateShortestPath()
            },10 * i)
            return;
        }
        setTimeout(() => {
            const node = visitedNodesInOrder[i];
            const newGrid = this.state.grid.slice();
            const newNode = {
                ...node,
                isVisited: true,
            };
            newGrid[node.row][node.col] = newNode;
                console.log(document.getElementById('node-${node.row}-$(node.col)'));
                document.getElementById(`node-${node.row}-${node.col}`).className=
                'node node-visited';
                // this.setstate({grid: newGrid});
            }, 10 * i);
        } 
    }

    animateShortestPath(nodesInShortestPathOrder) {
        for(let i =0; i< nodesInShortestPathOrder.length;i++) {
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                const newGrid = this.state.grid.slice();
                const newNode = {
                    ...node,
                    isVisited: true;
                };
                newGrid[node.row][node.col] = newNode;
                document.getElementById('node-${node.row}-${node.col}').className = 'node node-visited';
                //this.setState({grid: newGrid});
            }, 25 * i);
            }
        }

    visualizeDijkstra() {
        const {grid} = this.state;
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder( finishNode);
        console.log(nodesInShortestPathOrder);
        this.animateDijakstra(visitedNodesInOrder);
    }

    render() {
        const {grid} = this.state;

        return (
            <>
            <button onClick={() => this.visualizeDijkstra()}>
            Visualize Dijkstra's Alogorithm
            </button>
            <div className="grid">
            { grid.map((row,rowIdx)=> {
                return (
                    <div key={rowIdx}>
                    {row.map((node,nodeIdx)=> {
                        const { row, col , isFinish, isStart, isWall} = node;
                        return (
                            <Node
                            Key= {nodeIdx}
                            col={col}
                            isFinish={isFinish}
                            isStart={isStart}
                            isWall={isWall}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={(row,col) => this.handleMouseDown(row, col)}
                            onMouseEnter={(row,col) =>
                                this.handleMouseEnter(row,col)
                            }
                            onMouseUo={()=> this.handleMouseUo()}
                            row={row}></Node>
                        };
                    })}
                    </div>
                    );
                })}
            </div>
        </>
        );
    }

    //refracting 

    const getInitialGrid = () => {  // method to get the initial grid 
        const grid = [];
        for (let row = 0; row < 20;row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                currentRow.push(cretaeNode(col,row));
            }
            grid.push(currentRow);
        }
        return grid;
    };

    const createNode = {col,row} => {
        return {
            col,
            row,
            isStart: row === START_NODE_ROW && col === START_NODE_COL,
            isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        };
    };

    const getNewGridWithWallToggled = (grid, row, col) => {
        const newGrid = grid.slice();
        const node = newGrid[row][col];
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        return newGrid;
    };

}