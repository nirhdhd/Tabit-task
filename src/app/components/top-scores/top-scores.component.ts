import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, User } from 'src/app/app.service';

@Component({
  selector: 'app-top-scores',
  templateUrl: './top-scores.component.html',
  styleUrls: ['./top-scores.component.scss'],
})
export class TopScoresComponent implements OnInit {
  users: User[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public sevice: AppService
  ) {}

  ngOnInit(): void {
    this.sevice.getTopFive().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }
  goBack() {
    this.router.navigate(['/main']);
  }
}
