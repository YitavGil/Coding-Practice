const numIslands = (grid) =>{
    let counter = 0;
    for(let rowIndex in grid){
        for(let colIndex in grid[rowIndex]){
            if(grid[rowIndex][colIndex] === '1'){
                counter++;
                teraform(parseInt(rowIndex), parseInt(colIndex), parseInt(grid))
            }
        }
    }

    return counter
};

//Convert grid around '1' to '0'
const teraform = (rowIn, colIn, grid) => {
    if(grid[rowIn] === undefined || grid[rowIn][colIn]=== undefined || grid[rowIn][colIn] === 0) return;
    grid[rowIn][colIn] = '0';

    teraform(rowIn+1, colIn, grid);
    teraform(rowIn-1, colIn, grid);
    teraform(rowIn, colIn+1, grid);
    teraform(rowIn, colIn-1, grid);
}