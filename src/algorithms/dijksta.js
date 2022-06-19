// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes back to their
// previous node, effectivelly allowing us to compute the shortest path
// by backtracking from the finish node.

    export function dijkstra(grid, startNode, finishNode) {
        const visitedNodesInOrder = [];
    startNode.distance = 0;
    const univisitedNodes = getAllNodes(grid);
    while (!!unvisitedNodes.length) {
        sortNodesByDiatance(unvisitedNodes);
        const closertNode = unvisitedNodes.shift();
        // If we encounter a wall we skip it .
        if(closestNode.isWall) continue;
        // If the closest node is at a distance of infinity,
        // We must be trapped and should therfore stop.
        if(closestNode.distance=== Infinity) return visitedNodesInOrder;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if(closestNode === finishNode) return 'success!';  // reached the finished node 
        updateNeighbors(closesNode,grid);
            }
        } 

        function sortNodesByDistance(unvisitedNodes) {
            unvisitedNodes.sort((nodeA,nodeB)) => nodeA.distance - nodeB.distance);
        }

        function updateUnvisitedNeighbors(node, grid) {

            const neighbors = getNeighbours(node, grid);
            for (const neighbor of neighbors) {
                neighbour.distance = node.distance + 1;
            }
        }

        function getUnvisitedNeighbours(node, grid) {
            const neighbours = [];
            const {col, row} = node;
            if(row > 0) neighbours.push(grid[row - 1][col]);
            if(row < grid.length - 1) neighbours.push(grid[row + 1][col]);
            if(col > 0) neighbours.push(grid[row][col - 1]);
            if(col < grid[0].length -1 ) neighbours.push(grid[row][col + 1]);
            return neighbours.filter(neighbour => !neighbour.isVisited);
        }
        function getAllNodes(grid) {
            const nodes= [];
            for (const row of grid) {
                for(const node of row) {
                    nodes.push(node);
                }
            }
            return nodes;
        }

        export function getNodesInShortestPathOrder( finishNode) {
        const nodesInShortestPathOrder = [];
        let currentNode = finishNode;
        while (currentNode !== null) {
        nodesInShortestPathOrder.unshift(currentNode);
        currentNode = currentNode.previousNode;
        }
        return nodesInShortestPathOrder;
    }
