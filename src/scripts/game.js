let board;
let score = 0;
let rows = 4;
let columns = 4;
let recordValue;

const content = document.getElementById('board');
const currentScore = document.querySelector('.currentScore');
const record = document.querySelector('.record');
const scoreRecordValue = document.querySelector('.scoreRecord');
const alertScreen = document.querySelector('.alert');
const warningScreen = document.querySelector('.warning');
const button = document.querySelector('.ok');
const restart = document.querySelector('.restart');

export const game = function setGame() {
  // localStorage.removeItem('scoreRecord');

  // create start board
  createBoard();
  // create 2 to begin the game
  setTwo();
  setTwo();
  // action on keyboard arrows (desktop) or slides (mobile)
  setupInput();
};

function createBoard() {
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
  if (!localStorage.getItem('scoreRecord')) {
    localStorage.setItem('scoreRecord', 0);
  }
}

function eraseBoard() {
  Array.from(document.getElementById('board').children).forEach((el) => {
    el.remove();
  });
  score = 0;
}

function setupInput() {
  window.addEventListener('keyup', handleKeydown, { once: true });
  if (!content.classList.contains('inactive')) {
    window.addEventListener('touchstart', handleTouchStart, { once: true, passive: false });
  }
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
  document.querySelector('.score').innerText = score;

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

if (button) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alertScreen.classList.add('hidden');
    content.classList.remove('inactive');
    window.addEventListener('touchstart', handleTouchStart, { once: true, passive: false });
  });
}

if (restart) {
  restart.addEventListener('click', (e) => {
    e.preventDefault();
    if (+localStorage.getItem('scoreRecord') <= recordValue) {
      scoreRecordValue.innerText = recordValue;
      localStorage.setItem('scoreRecord', recordValue);
    }
    warningScreen.classList.add('hidden');
    content.classList.remove('inactive');
    window.addEventListener('touchstart', handleTouchStart, { once: true, passive: false });
    record.classList.remove('hidden');
    count = 0;
    document.querySelector('.score').innerText = 0;
    eraseBoard();
    createBoard();
  });
}

function showAlert(number) {
  alertScreen.classList.remove('hidden');
  content.classList.add('inactive');
  currentScore.innerText = number;
}

let x1024 = true;
let x2048 = true;
let x4096 = true;
let x8192 = true;
let x16384 = true;
let x32768 = true;

function checkScore(num) {
  if (num > 0) {
    if (document.querySelector('.tile')) {
      document.querySelectorAll('.tile').forEach((element) => {
        if (+element.textContent !== 0) {
          if (+element.textContent % 1024 === 0) {
            if (+element.textContent === 1024 && x1024 === true) {
              showAlert(+element.textContent);
              x1024 = false;
            } else if (+element.textContent === 2048 && x2048 === true) {
              showAlert(+element.textContent);
              x2048 = false;
            } else if (+element.textContent === 4096 && x4096 === true) {
              showAlert(+element.textContent);
              x4096 = false;
            } else if (+element.textContent === 8192 && x8192 === true) {
              showAlert(+element.textContent);
              x8192 = false;
            } else if (+element.textContent === 16384 && x16384 === true) {
              showAlert(+element.textContent);
              x16384 = false;
            } else if (+element.textContent === 32768 && x32768 === true) {
              showAlert(+element.textContent);
              x32768 = false;
            }
          }
        }
      });
    }
  }
}

function updateTile(tile, num) {
  tile.innerText = '';
  tile.classList.value = ''; // clear the classList
  tile.classList.add('tile');
  if (num > 0) {
    const bgLightness = 100 - Math.log2(num) * 7;
    tile.innerText = num.toString();
    tile.classList.add('colored');
    tile.style.setProperty('--bg-ligthness', `${bgLightness}%`);
    tile.style.setProperty('--text-ligthness', `${bgLightness < 50 ? 90 : 10}%`);
    checkScore(num);
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

let count = 0;
function hasEmptyTile() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] === 0) {
        // at least one zero in the board
        count = 0;
        return true;
      }
    }
  }
  count += 1;
  if (count === 1) {
    recordValue = score;
    warningScreen.classList.remove('hidden');
    content.classList.add('inactive');
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
