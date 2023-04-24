/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (57.09%)
 * Likes:    19584
 * Dislikes: 435
 * Total Accepted:    2.1M
 * Total Submissions: 3.7M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * Output: 3
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

const getAdjNeighbors = (i, j, grid, visited) => {
   const adjNeighbors = [];
   
   if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
   if (i < grid.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j]);

   if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
   if (j < grid[0].length - 1 && !visited[i][j + 1]) adjNeighbors.push([i, j + 1]);

   return adjNeighbors;
};

const dFS = (i, j, grid, visited) => {
   const stack = [[i, j]];
   let islandSize = 0;

   while (stack.length) {
      let curNode = stack.pop();
      let [i, j] = curNode;
      
      // check if visited at i and j
      if (visited[i][j]) continue;
      visited[i][j] = true;
      
      //check if cell is a part of an island
      if (grid[i][j] === '0') continue;
      islandSize++;

      let adjNeighbors = getAdjNeighbors(i, j, grid, visited);

      stack.push(...adjNeighbors);
   }

   return islandSize > 0 ? true : false;
};

const numIslands = (grid) => {
   const visited = grid.map(row => row.map(cell => false));
   let islandCount = 0;

   for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
         if (dFS(i, j, grid, visited)) islandCount++;
      }
   }

   return islandCount;
};
// @lc code=end

