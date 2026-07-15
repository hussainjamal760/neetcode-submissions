class Solution {
    isValidSudoku(board) {
        const rows = new Map()
        const cols = new Map()
        const boxes = new Map()

        for(let row = 0 ; row < 9 ; row++){
            for(let col = 0 ; col < 9 ; col++){
            
            let value = board[row][col]

            if(value === '.') continue;

            if(!rows.has(row)) rows.set(row , new Set())
            if(!cols.has(col)) cols.set(col , new Set())

            const box = `${Math.floor(row / 3)}-${Math.floor(col / 3)}`;
            
            if(!boxes.has(box)) boxes.set(box , new Set)

            if(rows.get(row).has(value) || cols.get(col).has(value) || boxes.get(box).has(value)){
                return false
            }

            rows.get(row).add(value)
            cols.get(col).add(value)
            boxes.get(box).add(value)
        }
        
    }
    return true;
}
}
