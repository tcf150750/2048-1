documentWidth = window.screen.availWidth;
var gridContainerWidth = 0.92 * documentWidth;
var cellSideLength = 0.18 * documentWidth;
var cellSpace = 0.04 * documentWidth;
function getPosTop(i, j) {
    return cellSpace + i * (cellSideLength + cellSpace);
}

function getPosLeft(i, j) {
    return cellSpace + j * (cellSideLength + cellSpace);
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return '#eee4da';
        case 4:
            return '#ede0c8';
        case 8:
            return '#f2b179';
        case 16:
            return '#f59563';
        case 32:
            return '#f67c5f';
        case 64:
            return '#f65e3b';
        case 128:
            return '#ed7fc2';
        case 256:
            return '#edcc61';
        case 512:
            return '#9c0';
        case 1024:
            return '#33b5e5';
        case 2048:
            return '#09c';
        case 4096:
            return '#a6c';
        case 8192:
            return '#93c';
    }
    return 'black';
}

function getNumberColor(number) {
    if (number <= 4) {
        return '#776e65';
    }
    return 'white';
}
//没有位置函数
function nospace() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
//判断是否能向左移动
function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                // console.log('来到');
                if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
                    // console.log('来到2');
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function canmoveDown(board) {
    for (var j = 0; j < 4; j++) {
        for (var i = 2; i >= 0; i--) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}


//判断向左右到目标位置的时候有没有障碍物
function noBlockHorizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}

function noBlockVertical(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0) {
            return false;
        }
    }
    return true;
}

function nomove(board) {
    if (canMoveLeft(board) ||
        canMoveRight(board) ||
        canMoveUp(board) ||
        canmoveDown(board)) {
        return false;
    }
    return true;
}