function solution(board, aloc, bloc) {
  let isMovable = (row, col, bd) => bd[row][col] === 1;
  let isEdge = (row, col) =>
    row === -1 || row >= board.length || col === -1 || col >= board[0].length;
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let turn = 0,
    count = 0;
  let start = [board, [[aloc], [bloc]], turn, count];
  let que = [start];
  let answer = Infinity;
  let win = {
    a: [],
    b: [],
  };

  while (que.length) {
    let [board, players, turn, count] = que.shift();
    let player = players[turn];
    let [row, col] = player[player.length - 1];

    if (board[row][col] === 0) {
      turn === 1
        ? win["a"].push([players, count])
        : win["b"].push([players, count]);

      continue;
    }

    let isLose = true;

    for (let [rowAdd, colAdd] of dirs) {
      let rowNext = row + rowAdd;
      let colNext = col + colAdd;

      if (!isEdge(rowNext, colNext) && isMovable(rowNext, colNext, board)) {
        isLose = false;

        let boardNext = board.map((arr) => [...arr]);
        boardNext[row][col] = 0;

        let playersNext = players.map((arr) => [...arr]);
        playersNext[turn].push([rowNext, colNext]);

        que.push([boardNext, playersNext, 1 ^ turn, count + 1]);
      }
    }

    if (isLose) {
      turn === 1
        ? win["a"].push([players, count])
        : win["b"].push([players, count]);
    }
  }

  if (win.a.length === 0) {
    return win.b[0][1];
  }

  if (win.b.length === 0) {
    return win.a[0][1];
  }

  let minA = Infinity,
    maxB = -Infinity;
  for (let [[recordA, recordB], count] of win.a) {
    console.log("A가 이기는 경우");
    console.log("A 동선:", recordA, "A 이동 횟수:", recordA.length - 1);
    console.log("B 동선:", recordB, "B 이동 횟수:", recordB.length - 1);

    // minA = Math.min(minA, recordA.length);
    // maxB = Math.max(maxB, recordB.length);
    let boardTemp = board.map((arr) => [...arr]);
    console.log(boardTemp);

    for (let i = 0; i < recordA.length; i++) {
      let [rowA, colA] = recordA[i];
      let movablesA = [];

      for (let [rowAdd, colAdd] of dirs) {
        let [rowNext, colNext] = [rowA + rowAdd, colA + colAdd];

        if (
          !isEdge(rowNext, colNext) &&
          isMovable(rowNext, colNext, boardTemp)
        ) {
          movablesA.push([rowNext, colNext]);
        }
      }

      if (!recordB[i]) {
        break;
      }

      let [rowB, colB] = recordB[i];
      let min = Infinity;
      let optA = [];

      for (let [rowMovable, colNovable] of movablesA) {
        let dist = Math.abs(rowB - rowMovable) + Math.abs(colB - colNovable);

        if (dist < min) {
          min = dist;
          optA = [[rowMovable, colNovable]];
        } else if (dist === min) {
          optA.push([rowMovable, colNovable]);
        }
      }

      if (!JSON.stringify(optA).includes(JSON.stringify(recordA[i + 1]))) {
        break;
      }

      boardTemp[rowA][colA] = 0;

      let movablesB = [];

      for (let [rowAdd, colAdd] of dirs) {
        let [rowNext, colNext] = [rowB + rowAdd, colB + colAdd];

        if (
          !isEdge(rowNext, colNext) &&
          isMovable(rowNext, colNext, boardTemp)
        ) {
          movablesB.push([rowNext, colNext]);
        }
      }

      let max = -Infinity;
      let optB;

      for (let [rowMovable, colNovable] of movablesB) {
        let dist = Math.abs(rowA - rowMovable) + Math.abs(colA - colNovable);

        if (dist > max) {
          max = dist;
          optB = [[rowMovable, colNovable]];
        } else if (dist === max) {
          optB.push([rowMovable, colNovable]);
        }
      }

      if (!JSON.stringify(optB).includes(JSON.stringify(recordB[i + 1]))) {
        break;
      }
    }
  }

  //     for (let [[recordA, recordB], count] of win.b) {
  //         console.log('B가 이기는 경우');
  //         console.log('A 동선:', recordA, 'A 이동 횟수:', recordA.length - 1);
  //         console.log('B 동선:', recordB, 'B 이동 횟수:', recordB.length - 1);
  //     }

  return answer;
}
