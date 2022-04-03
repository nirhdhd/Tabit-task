import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';

export interface User {
  name: string;
  score: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  playerName: string = '';
  finalScore: number = 0;

  constructor(private http: HttpClient) {}

  public addUser(user: User) {
    this.http
      .post<{ d: any }>(
        `http://localhost:49303/bowling-server.asmx/AddUser`,
        { user },
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .subscribe();
  }

  public getTopFive() {
    return this.http
      .get<{ d: any }>(
        `http://localhost:49303/bowling-server.asmx/GetTopFive`,
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .pipe(map((response) => response.d));
  }
}
