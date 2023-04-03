let board;
let score = 0;
let rows = 4;
let columns = 4;

export const game = function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
      document.getElementById('board').append(tile);
    }
  }
  // create 2 to begin the game
  setTwo();
  setTwo();
  // action on keyboard arrows (desktop) or slides (mobile)
  setupInput();
};

function setupInput() {
  window.addEventListener('keyup', handleKeydown, { once: true });
  window.addEventListener('touchstart', handleTouchStart, { once: true, passive: false });
}

function handleKeydown(e) {
  handleInput(e.key);
}

function handleInput(key) {
  switch (key) {
    case 'ArrowLeft':
      slideLeft();
      break;
    case 'ArrowRight':
      slideRight();
      break;
    case 'ArrowUp':
      slideUp();
      break;
    case 'ArrowDown':
      slideDown();
      break;
    default:
      setupInput();
      return;
  }
  setTwo();
  document.getElementById('score').innerText = score;
  setupInput();
}

function handleTouchStart(e) {
  e.preventDefault();

  let touchStartData = e.changedTouches[0];
  let touchStartDate = new Date();

  window.addEventListener(
    'touchend',
    (evt) => {
      evt.preventDefault();
      let touchEndData = evt.changedTouches[0];

      if (new Date() - touchStartDate > 1000) {
        setupInput();
        return;
      }

      let deltaX = touchEndData.pageX - touchStartData.pageX;
      let deltaY = touchEndData.pageY - touchStartData.pageY;

      if (Math.abs(deltaX) >= 55) {
        handleInput(deltaX > 0 ? 'ArrowRight' : 'ArrowLeft');
      } else if (Math.abs(deltaY) >= 55) {
        handleInput(deltaY > 0 ? 'ArrowDown' : 'ArrowUp');
      }
      setupInput();
    },
    { once: true },
  );
}

function updateTile(tile, num) {
  tile.innerText = '';
  tile.classList.value = ''; // clear the classList
  tile.classList.add('tile');
  if (num > 0) {
    const bgLightness = 100 - Math.log2(num) * 9;
    tile.innerText = num.toString();
    tile.classList.add('colored');
    tile.style.setProperty('--bg-ligthness', `${bgLightness}%`);
    tile.style.setProperty('--text-ligthness', `${bgLightness < 50 ? 90 : 10}%`);
  }
}

function filterZero(row) {
  return row.filter((num) => num !== 0); // create new array of all nums !== 0
}

function slide(row) {
  // e.g, [0, 2, 2, 2]
  row = filterZero(row); // [0, 2, 2, 2] -> [2, 2, 2]
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  } // [2, 2, 2] -> [4, 0, 2]
  row = filterZero(row); // [4, 0, 2] -> [4, 2]
  // add zeroes
  while (row.length < columns) {
    row.push(0);
  } // [4, 2] -> [4, 2, 0, 0]
  return row;
}

function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + '-' + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r]; // [0, 2, 2, 2]
    row.reverse(); // [2, 2, 2, 0]
    row = slide(row); // [4, 2, 0, 0]
    board[r] = row.reverse(); // [0, 0, 2, 4];
    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + '-' + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);
    // board[0][c] = row[0];
    // board[1][c] = row[1];
    // board[2][c] = row[2];
    // board[3][c] = row[3];
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + '-' + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();
    // board[0][c] = row[0];
    // board[1][c] = row[1];
    // board[2][c] = row[2];
    // board[3][c] = row[3];
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + '-' + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function hasEmptyTile() {
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] === 0) {
        // at least one zero in the board
        return true;
      }
    }
  }
  return false;
}

function setTwo() {
  if (!hasEmptyTile()) {
    return;
  }
  let found = false;
  while (!found) {
    // find random row and column to place a 2 in
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);
    if (board[r][c] === 0) {
      board[r][c] = 2;
      let tile = document.getElementById(r.toString() + '-' + c.toString());
      tile.innerText = '2';
      tile.classList.add('colored');
      tile.style.setProperty('--bg-ligthness', '90%');
      tile.style.setProperty('--text-ligthness', '10%');
      found = true;
    }
  }
}
