// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { BehaviorSubject, map, observable, Observable, of, take } from 'rxjs';
// import { filter } from 'rxjs/operators';

// //Array(10).fill([0,0,0]);
// interface GameStatus {
//   gameBoard: number[][];
//   round: number;
//   shots: number[];
// }

// let startState: GameStatus = {
//   gameBoard: Array(10).fill([0, 0, 0]), // [shot one,shot two,result]
//   round: 0, // 0-9
//   shots: [-1, -1],
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class AppService {
//   public gameStatus = new BehaviorSubject<GameStatus>(startState);
//   public gameStatus$ = this.gameStatus.asObservable();

//   constructor(private http: HttpClient) {}

//   updateGameStatus(pins: number) {
//     let arr = this.gameStatus.getValue().gameBoard;
//     let newResults = [0, 0, 0];
//     this.gameStatus$.pipe(take(1)).subscribe((details) => {
//       let { round, shots, gameBoard } = details;

//       //-1 -spare | -2 - strike
//       if (shots[0] == -1) {
//         // strike
//         if (pins == 10) {
//           newResults[0] = -2; //update game board
//           round = round + 1; // move to next round
//           shots = [-1, -1]; //reset shots
//         } else {
//           shots[0] = pins;
//           newResults[0] = pins;
//         }
//       } else if (shots[0] !== -1 && shots[1] == -1) {
//         // spare
//         if (shots[0] + pins == 10) {
//           newResults[1] = -1;
//           round = round + 1; // move to next round
//           shots = [-1, -1]; //reset shots
//         } else {
//           newResults[1] = pins;
//           newResults[2] = shots[0] + pins; // result
//           round = round + 1; // move to next round
//           shots = [-1, -1]; //reset shots
//         }
//       }

//       // update the new state
//       this.gameStatus.next({
//         gameBoard: Object.assign([...arr], {
//           [0]: Object.assign([...arr[round]], {
//             [0]: newResults[0],
//             [1]: newResults[1],
//             [3]: newResults[2],
//           }),
//         }),
//         round: round,
//         shots: [...shots],
//       });

//       console.log('foo::', this.gameStatus.getValue());
//     });
//   }
// }
